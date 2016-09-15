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
var auth_service_1 = require('../login/auth.service');
var user_data_service_1 = require('../login/user-data.service');
var NavigationComponent = (function () {
    function NavigationComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    NavigationComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.userService.getCurrentUser().then(function (user) { _this.currentUserName = user.first_name + " " + user.last_name; console.log(_this.currentUserName); });
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: 'app/imports/navigation/navigation.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, user_data_service_1.UserService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map