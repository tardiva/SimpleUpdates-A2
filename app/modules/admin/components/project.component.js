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
var forms_1 = require('@angular/forms');
var projects_data_service_1 = require('../../../services/projects-data.service');
var user_data_service_1 = require('../../../services/user-data.service');
var ProjectComponent = (function () {
    function ProjectComponent(formBuilder, projectsDataService, userService) {
        this.formBuilder = formBuilder;
        this.projectsDataService = projectsDataService;
        this.userService = userService;
        this.closeForm = new core_1.EventEmitter();
        this.newProject = new core_1.EventEmitter();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.editProjectForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            manager: ['', forms_1.Validators.required]
        });
        this.getManagersList();
    };
    ProjectComponent.prototype.getManagersList = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.usersOptions = users.map(function (item) { return { key: item.id, label: item.first_name + ' ' + item.last_name }; }); });
    };
    ProjectComponent.prototype.selectRow = function (event) {
        var row = event.target.closest(".project-item");
        console.log(row);
        row.classList.toggle("selected");
    };
    ProjectComponent.prototype.showInput = function (project, event) {
        this.selectRow(event);
        project.editMode = true;
    };
    ProjectComponent.prototype.isEditMode = function (project) {
        if (project.editMode && project.editMode == true) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectComponent.prototype, "closeForm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectComponent.prototype, "newProject", void 0);
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'app/modules/admin/components/project.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, projects_data_service_1.ProjectsDataService, user_data_service_1.UserService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map