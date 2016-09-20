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
var projects_data_service_1 = require('../../../services/projects-data.service');
var ProjectsListComponent = (function () {
    function ProjectsListComponent(projectsDataService) {
        this.projectsDataService = projectsDataService;
    }
    ProjectsListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsDataService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectsListComponent.prototype.showNewForm = function () {
        if (this.isFormHidden == true) {
            this.isFormHidden = false;
        }
        else {
            this.isFormHidden = true;
        }
    };
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.isFormHidden = true;
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: 'app/modules/admin/components/projects-list.component.html',
        }), 
        __metadata('design:paramtypes', [projects_data_service_1.ProjectsDataService])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map