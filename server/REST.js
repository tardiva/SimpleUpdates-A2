var mysql = require("mysql");
var md5 = require('MD5');
var jwt = require('jwt-simple');
var jwtAuth = require("./jwtauth.js");
var isAdmin = require("./is_admin.js");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection) {
    
    router.post("/login",function(req,res){
        var query = "SELECT `id`, `first_name`, `last_name`, `is_admin` FROM `users` WHERE `email` = ? AND `password` = ?";
        var table = [req.body.email, req.body.password];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                if (!rows[0])
                    {res.json({"Error" : false, "Success" : false});};
                if (rows[0])
                    {  var expires = new Date;
                       expires.setUTCDate(expires.getUTCDate() + 7);
                       var issuer = rows[0].id
                       
                       var token = jwt.encode({
                         iss: issuer,
                         exp: expires
                        }, req.tokenKey);
                        
                        res.json({"Error" : false, "Success" : true, "data": rows[0], "token": token});};
            }
        });
    });

    router.post("/users",function(req,res){
        var query = "INSERT INTO `users`(`email`,`password`,`is_admin`,`first_name`,`last_name`,`tenant_id`) VALUES (?,?,?,?,?,?)";
        var table = [req.body.email, md5(req.body.password), req.body.is_admin, req.body.first_name, req.body.last_name, 1];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
    
    router.put("/users", jwtAuth, isAdmin, function(req,res){
        var query = "UPDATE `users`SET `first_name` = ?, `last_name` = ? WHERE `id` = ?";
        var table = [req.body.firstName, req.body.lastName, req.body.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "User Updated !"});
            }
        });
    });

    router.get("/users", jwtAuth, isAdmin, function(req,res){
        var query = "SELECT `id`, `first_name`, `last_name`, `email`, `is_admin` FROM `users` WHERE tenant_id = ?";
        var table = [req.tenant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows});
            }
        });
    });
    
    router.get("/current_user", jwtAuth, function(req,res){
                
        var query = "SELECT `first_name`, `last_name`, `is_admin` FROM `users` WHERE `id` = ?";
        var table = [req.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows[0]});
            }
        });
    });

    router.post("/projects", jwtAuth, isAdmin, function(req,res){
        var query = "INSERT INTO `projects`(`name`,`manager`) VALUES (?,?)";
        var table = [req.body.name,req.body.manager];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Project Added !"});
            }
        });
    });
    
    router.put("/projects", jwtAuth, isAdmin, function(req,res){
        var query = "UPDATE `projects` SET `name` = ?, `manager` = ? WHERE `id` = ?";
        var table = [req.body.name,req.body.manager,req.body.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Project Updated !"});
            }
        });
    });

    router.get("/projects", jwtAuth, function(req,res){
        var query = "SELECT `p`.`id`, `p`.`name`, `p`.`manager`, `u`.`first_name`, `u`.`last_name` FROM `projects` AS `p` LEFT JOIN `users` AS `u` ON `p`.`manager` = `u`.`id` WHERE u.id IN (SELECT `id` FROM `users` WHERE tenant_id = ?) ORDER BY `p`.`name`";
        var table = [req.tenant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows});
            }
        });
    });

    router.post("/updates", jwtAuth, function(req,res){
        var query = "INSERT INTO `updates`(`project_id`,`status`,`text`,`updated_by`, `date_created`) VALUES (?,?,?,?,UTC_TIMESTAMP())";
        var table = [req.body.project,req.body.status,req.body.text, req.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"  + err});
            } else {
                res.json({"Error" : false, "Message" : "Update Added !"});
            }
        });
    });

    router.get("/last_updates", jwtAuth, function(req,res){
        var query = "SELECT `p`.`name`, `u`.`date_created`, `u`.`status`, `u`.`text`, `us`.`first_name`, `us`.`last_name` FROM `projects` AS `p` LEFT JOIN `updates` AS `u` ON `p`.`id` = `u`.`project_id` AND `u`.`date_created` IN (SELECT MAX(`u`.`date_created`) FROM `updates` AS `u` GROUP BY `u`.`project_id`) LEFT JOIN `users` AS `us` ON `u`.`updated_by` = `us`.`id` WHERE `p`.`manager` IN (SELECT `id` FROM `users` WHERE tenant_id = ?) ORDER BY `p`.`name`";
        var table = [req.tenant_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;