var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
//var md5 = require('MD5');
//var jwt = require('jwt-simple');
var rest = require("./REST.js");
//var jwtAuth = require("./jwtauth.js"); 
var app  = express();

app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

function REST(){
    var self = this;
    self.connectMysql();
}
REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : 'pass123',
        database : 'simple_updates',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
            self.stop(err);
        } else {
            self.configureExpress(connection);
        }
    });
};

REST.prototype.configureExpress = function(connection) {
    var self = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
           
    var router = express.Router();
    
    app.use('/admin/node_modules', express.static('node_modules'));
    app.use('/node_modules', express.static('node_modules'));
    app.use('/admin/app', express.static('app'));
    app.use('/app', express.static('app'));
    app.use('/admin', express.static('public'));
    app.use('/', express.static('public'));
    
    app.use('/api', function(req,res,next){req.tokenKey = app.get('jwtTokenSecret'); req.connection = connection; next();}, router);
    
    var rest_router = new rest(router,connection);
    
    app.use(['/login', '/updates', '/signup', '/home'], function (req, res) {res.sendFile("index.html", { root: './public' });});
    app.use(['/admin/projects', '/admin/users'], function (req, res) {res.sendFile("index.html", { root: './public' });});

    self.startServer();
};

REST.prototype.startServer = function() {
    app.listen(8000,function(){
        console.log("All right ! I am alive at Port 8000.");
    });
};

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
};

new REST();


