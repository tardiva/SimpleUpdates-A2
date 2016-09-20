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
var ProjectsDataService = (function () {
    function ProjectsDataService(httpAuth) {
        this.httpAuth = httpAuth;
        this.projectsUrl = 'http://localhost:8000/api/projects';
    }
    ProjectsDataService.prototype.addProject = function (project) {
        var url = this.projectsUrl;
        return this.httpAuth
            .post(url, project)
            .then(function () { return null; });
    };
    ProjectsDataService.prototype.getProjects = function () {
        var _this = this;
        return this.httpAuth.get(this.projectsUrl)
            .then(function (projects) { return _this.projects = projects; });
    };
    ProjectsDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpAuth_service_1.httpAuth])
    ], ProjectsDataService);
    return ProjectsDataService;
}());
exports.ProjectsDataService = ProjectsDataService;
//# sourceMappingURL=projects-data.service.js.map