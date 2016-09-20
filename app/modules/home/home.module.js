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
//import { AdminModule } from '../admin/admin.module'
var home_routes_1 = require('./home.routes');
var home_component_1 = require('./components/home.component');
var navigation_component_1 = require('./components/navigation.component');
var updates_list_component_1 = require('./components/updates-list.component');
var update_form_component_1 = require('./components/update-form.component');
var update_component_1 = require('./components/update.component');
var updates_data_service_1 = require('../../services/updates-data.service');
var projects_data_service_1 = require('../../services/projects-data.service');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, home_routes_1.homeRouting /*, adminModule*/],
            declarations: [home_component_1.HomeComponent, navigation_component_1.NavigationComponent, updates_list_component_1.UpdatesListComponent, update_form_component_1.UpdateFormComponent, update_component_1.UpdateComponent],
            exports: [],
            providers: [updates_data_service_1.UpdatesDataService, projects_data_service_1.ProjectsDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map