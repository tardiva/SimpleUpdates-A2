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
var auth_service_1 = require('../../../services/auth.service');
var user_data_service_1 = require('../../../services/user-data.service');
var NavigationComponent = (function () {
    function NavigationComponent(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
    }
    NavigationComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.getCurrentUser().then(function (user) {
            _this.currentUserName = user.first_name + " " + user.last_name;
            _this.isAdmin = user.is_admin;
        });
    };
    NavigationComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.authService.logout();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.isAdminLinkActive = this.router.isActive('/admin', false);
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation',
            templateUrl: 'app/modules/home/components/navigation.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, user_data_service_1.UserService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map