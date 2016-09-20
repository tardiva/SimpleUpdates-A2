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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var auth_service_1 = require('./auth.service');
var httpAuth = (function () {
    function httpAuth(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    httpAuth.prototype.handleError = function (error) {
        console.error('An error occurred', error.status);
        //return Promise.reject(error.message || error);
    };
    httpAuth.prototype.post = function (url, data) {
        var authToken = localStorage.getItem('auth_token');
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'x-access-token': authToken });
        return this.http
            .post(url, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    httpAuth.prototype.get = function (url) {
        var _this = this;
        var authToken = localStorage.getItem('auth_token');
        var headers = new http_1.Headers({ 'x-access-token': authToken });
        return this.http.get(url, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(function (error) { _this.handleError(error); if (error.status == 401) {
            _this.router.navigate(['/login']);
        } ; });
    };
    httpAuth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, router_1.Router])
    ], httpAuth);
    return httpAuth;
}());
exports.httpAuth = httpAuth;
//# sourceMappingURL=httpAuth.service.js.map