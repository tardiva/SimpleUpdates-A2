var jwt = require('jwt-simple');
var mysql = require('mysql');

module.exports = function(req, res, next) { 
        
        var token = req.headers['x-access-token'];
        
        if (token) {
        try {
        var decoded = jwt.decode(token, req.tokenKey);
        
        if (decoded.exp <= Date.now()) {
                res.status(401).send('Unauthorized');
        }
            else {
                var query = "SELECT `id` FROM ?? WHERE `id` = ?";
                var table = ["users", decoded.iss];
                query = mysql.format(query,table);
                req.connection.query(query,function(err,rows){
                    if(err) {
                        res.json({"Error" : true, "Message" : "Error executing MySQL query"});}
                    else if (!rows[0]){
                        res.status(401).send('Unauthorized');}
                    else if (rows[0]) {
                        req.user_id = decoded.iss;
                                      next();}
                })
            }

        } catch (err) {
        res.status(401).send('Unauthorized');
        }
        } else {
        res.status(401).send('Unauthorized');
        }
        
    
} 


