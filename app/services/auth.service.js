"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var httpAuth_service_1 = require('./httpAuth.service');
var AuthService = (function () {
    function AuthService(router, http, httpAuth) {
        this.router = router;
        this.http = http;
        this.httpAuth = httpAuth;
        this.loginUrl = 'http://localhost:8000/api/login';
        this.currentUserUrl = 'http://localhost:8000/api/current_user';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.token = localStorage.getItem('auth_token');
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        if (this.currentUser) {
            return new Promise(function (resolve, reject) { resolve(_this.currentUser); });
        }
        else {
            return this.httpAuth.get(this.currentUserUrl)
                .then(function (user) { return _this.currentUser = user; });
        }
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('auth_token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isAdmin = function () {
        return this.currentUser.is_admin;
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = this.loginUrl;
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var token = response.json() && response.json().token;
            var user = response.json() && response.json().data;
            if (token && user) {
                _this.token = token;
                localStorage.setItem('auth_token', token);
                _this.currentUser = user;
                localStorage.setItem('user', JSON.stringify(user));
                _this.router.navigate(['/']);
            }
            else { } //add 'user not found' error handling
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('auth_token');
        this.currentUser = null;
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, httpAuth_service_1.httpAuth])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map