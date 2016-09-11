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
var update_form_component_1 = require('./update-form.component');
var update_component_1 = require('./update.component');
var projects_data_service_1 = require('../projects/projects-data.service');
var updates_data_service_1 = require('./updates-data.service');
var UpdatesListComponent = (function () {
    function UpdatesListComponent(projectsDataService, updatesDataService) {
        this.projectsDataService = projectsDataService;
        this.updatesDataService = updatesDataService;
    }
    UpdatesListComponent.prototype.getProjects = function () {
        var _this = this;
        //this.projectsDataService.getProjects().then(projects => this.projects = projects);
        this.updatesDataService.getLastUpdates().then(function (projects) { return _this.projects = projects; });
    };
    UpdatesListComponent.prototype.ngOnInit = function () {
        this.getProjects();
        //console.log(this.projects);
    };
    UpdatesListComponent = __decorate([
        core_1.Component({
            selector: 'updates',
            templateUrl: 'app/imports/updates/updates-list.component.html',
            directives: [update_form_component_1.UpdateFormComponent, update_component_1.UpdateComponent]
        }), 
        __metadata('design:paramtypes', [projects_data_service_1.ProjectsDataService, updates_data_service_1.UpdatesDataService])
    ], UpdatesListComponent);
    return UpdatesListComponent;
}());
exports.UpdatesListComponent = UpdatesListComponent;
//# sourceMappingURL=updates-list.component.js.map