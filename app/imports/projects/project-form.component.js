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
var dropdown_component_1 = require('../utils/dropdown.component');
var projects_data_service_1 = require('./projects-data.service');
var ProjectFormComponent = (function () {
    function ProjectFormComponent(formBuilder, projectsDataService) {
        this.formBuilder = formBuilder;
        this.projectsDataService = projectsDataService;
        this.closeForm = new core_1.EventEmitter();
        this.newProject = new core_1.EventEmitter();
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
        this.newProjectForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            manager: ['', forms_1.Validators.required]
        });
        this.usersOptions = [{ key: 1, label: 'Anna Smith' }]; // stub 
    };
    ProjectFormComponent.prototype.addProject = function () {
        var _this = this;
        if (this.newProjectForm.valid) {
            this.projectsDataService.addProject(this.newProjectForm.value)
                .then(function () { return _this.newProject.emit(); });
            this.resetForm();
        }
    };
    ProjectFormComponent.prototype.resetForm = function () {
        /*this.newProjectForm.controls['name']['updateValue']('');*/
        this.newProjectForm.reset();
        this.closeForm.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectFormComponent.prototype, "closeForm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectFormComponent.prototype, "newProject", void 0);
    ProjectFormComponent = __decorate([
        core_1.Component({
            selector: 'project-form',
            templateUrl: 'app/imports/projects/project-form.component.html',
            directives: [dropdown_component_1.DropdownComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, projects_data_service_1.ProjectsDataService])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());
exports.ProjectFormComponent = ProjectFormComponent;
//# sourceMappingURL=project-form.component.js.map