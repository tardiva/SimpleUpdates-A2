var mysql = require('mysql');

module.exports = function (req, res, next) {

    var query = "SELECT `is_admin` FROM `users` WHERE `id` = ?";
    var table = [req.user_id];
    query = mysql.format(query,table);
    req.connection.query(query,function(err,rows){
                    if(err) {
                        res.status(500).send('Internal Server Error');
                    }
                    else if (rows[0].is_admin == 1) {
                        next();
                    }
                    
                    else {
                        res.status(401).send('Unauthorized');
                    }
                    

    })
};