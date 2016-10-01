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
//import { ProjectFormComponent } from './project-form.component';
//import { ProjectComponent } from './project.component';
var user_data_service_1 = require('../../../services/user-data.service');
var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
    }
    UsersListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersListComponent.prototype.closeForm = function () {
        /* this.isFormHidden = true;*/
    };
    UsersListComponent.prototype.showNewForm = function () {
        if (this.isFormHidden == true) {
            this.isFormHidden = false;
        }
        else {
            this.isFormHidden = true;
        }
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.isFormHidden = true;
    };
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/modules/admin/components/users-list.component.html',
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map