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
var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.loginUrl = 'http://localhost:8000/api/login';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.getCurrentUser = function () {
        return { fullName: 'Anna Smith' };
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = this.loginUrl;
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) { if (response.json().Success === true) {
            _this.router.navigate(['/updates']);
        } })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map