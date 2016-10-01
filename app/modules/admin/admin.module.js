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
var shared_module_1 = require('../shared/shared.module');
var admin_routes_1 = require('./admin.routes');
var projects_list_component_1 = require('./components/projects-list.component');
var project_component_1 = require('./components/project.component');
var project_form_component_1 = require('./components/project-form.component');
var users_list_component_1 = require('./components/users-list.component');
var user_component_1 = require('./components/user.component');
var user_form_component_1 = require('./components/user-form.component');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, admin_routes_1.adminRouting],
            declarations: [projects_list_component_1.ProjectsListComponent, project_component_1.ProjectComponent, project_form_component_1.ProjectFormComponent, users_list_component_1.UsersListComponent, user_component_1.UserComponent, user_form_component_1.UserFormComponent],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map