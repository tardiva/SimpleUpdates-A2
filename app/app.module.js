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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
//import { AuthHttp } from 'angular2-jwt/angular2-jwt';
var app_component_1 = require('./app.component');
var navigation_component_1 = require('./imports/navigation/navigation.component');
var updates_list_component_1 = require('./imports/updates/updates-list.component');
var projects_list_component_1 = require('./imports/projects/projects-list.component');
var httpAuth_service_1 = require('./imports/utils/httpAuth.service');
var auth_service_1 = require('./imports/login/auth.service');
var user_data_service_1 = require('./imports/login/user-data.service');
var projects_data_service_1 = require('./imports/projects/projects-data.service');
var updates_data_service_1 = require('./imports/updates/updates-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, navigation_component_1.NavigationComponent, updates_list_component_1.UpdatesListComponent, projects_list_component_1.ProjectsListComponent],
            providers: [auth_service_1.AuthService,
                user_data_service_1.UserService,
                projects_data_service_1.ProjectsDataService,
                updates_data_service_1.UpdatesDataService,
                httpAuth_service_1.httpAuth],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map