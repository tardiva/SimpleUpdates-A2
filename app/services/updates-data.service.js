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
var httpAuth_service_1 = require('./httpAuth.service');
var UpdatesDataService = (function () {
    function UpdatesDataService(httpAuth) {
        this.httpAuth = httpAuth;
        this.updatesUrl = 'http://localhost:8000/api/updates';
        this.lastUpdatesUrl = 'http://localhost:8000/api/last_updates';
    }
    UpdatesDataService.prototype.add = function (update) {
        var url = this.updatesUrl;
        return this.httpAuth
            .post(url, update)
            .then(function () { return null; });
    };
    UpdatesDataService.prototype.getLastUpdates = function () {
        var _this = this;
        return this.httpAuth.get(this.lastUpdatesUrl)
            .then(function (projects) { return _this.projects = projects; });
    };
    UpdatesDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpAuth_service_1.httpAuth])
    ], UpdatesDataService);
    return UpdatesDataService;
}());
exports.UpdatesDataService = UpdatesDataService;
//# sourceMappingURL=updates-data.service.js.map