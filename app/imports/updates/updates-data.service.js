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
require('rxjs/add/operator/toPromise');
var UpdatesDataService = (function () {
    function UpdatesDataService(http) {
        this.http = http;
        this.updatesUrl = 'http://localhost:8000/api/updates';
        this.lastUpdatesUrl = 'http://localhost:8000/api/last_updates';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UpdatesDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UpdatesDataService.prototype.add = function (update) {
        var url = this.updatesUrl;
        return this.http
            .post(url, JSON.stringify(update), { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UpdatesDataService.prototype.getLastUpdates = function () {
        return this.http.get(this.lastUpdatesUrl)
            .toPromise()
            .then(function (response) { return response.json().Updates; })
            .catch(this.handleError);
    };
    UpdatesDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UpdatesDataService);
    return UpdatesDataService;
}());
exports.UpdatesDataService = UpdatesDataService;
//# sourceMappingURL=updates-data.service.js.map