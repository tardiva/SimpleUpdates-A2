var mysql = require("mysql");
var md5 = require('MD5');
var jwt = require('jwt-simple');
var jwtAuth = require("./jwtauth.js");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection) {

    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });
    
    router.post("/login",function(req,res){
        var query = "SELECT id, first_name, last_name FROM `users` WHERE `email` = ? AND `password` = ?";
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
                        
                        res.json({"Error" : false, "Success" : true, /*"User": rows,*/ "Token": token});};
            }
        });
    });

    router.post("/users",function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)";
        var table = ["users","email","password", "first_name", "last_name", "tenant_id", req.body.email, md5(req.body.password),req.body.firstName,req.body.lastName,1];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });

    router.get("/users", jwtAuth, function(req,res){
        var query = "SELECT `id`, `first_name`, `last_name` FROM ??";
        var table = ["users"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows});
            }
        });
    });
    
    router.get("/current_user", jwtAuth, function(req,res){
                
        var query = "SELECT first_name, last_name FROM ?? WHERE `id` = ?";
        var table = ["users", req.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows[0]});
            }
        });
    });

    router.post("/projects", jwtAuth, function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["projects","name","manager",req.body.name,req.body.manager];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query" + err});
            } else {
                res.json({"Error" : false, "Message" : "Project Added !"});
            }
        });
    });

    router.get("/projects", jwtAuth, function(req,res){
        var query = "select p.id, p.name, u.first_name, u.last_name from projects as P left join users as U on P.manager = U.id";
        //var table = ["projects"];
        //query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "data" : rows});
            }
        });
    });

    router.post("/updates", jwtAuth, function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,date_created) VALUES (?,?,?,?,UTC_TIMESTAMP())";
        var table = ["updates","project_id","status","text","updated_by", req.body.project,req.body.status,req.body.text, req.user_id];
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
        var query = "select p.name, u.date_created, u.status, u.text, us.first_name, us.last_name from projects as p left join updates as u on p.id = u.project_id and u.date_created in (select max(u.date_created) from updates as u group by u.project_id) left join `users` as us on u.updated_by = us.id order by p.name";
        //var table = ["update"];
        //query = mysql.format(query/*,table*/);
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