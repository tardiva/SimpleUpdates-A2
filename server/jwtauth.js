var jwt = require('jwt-simple');
var mysql = require('mysql');

module.exports = function (req, res, next) {

    var token = req.headers['x-access-token'];

    if (token) {
        try {
            var decoded = jwt.decode(token, req.tokenKey);

            if (decoded.exp <= Date.now()) {
                res.status(401).send('Unauthorized');
            }
            else {

                var query = "SELECT `id`, `tenant_id` FROM `users` WHERE `id` = ?";
                var table = [decoded.iss];
                query = mysql.format(query,table);
                req.connection.query(query,function(err,rows){
                    if(err) {
                        res.status(500).send('Internal Server Error');
                    }
                    else if (rows[0]) {
                        req.user_id = decoded.iss;
                        req.tenant_id = rows[0].tenant_id;
                        next();
                    }
                    
                    else {res.status(401).send('Unauthorized');}
                    

                })
            }

        } catch (err) {

        res.status(500).send('Internal Server Error');

        }
    } else {
        res.status(401).send('Unauthorized');
    }
};


