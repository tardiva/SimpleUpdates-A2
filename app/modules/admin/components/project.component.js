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
var validation_service_1 = require('../../../services/validation.service');
var ProjectComponent = (function () {
    function ProjectComponent(formBuilder, projectsDataService, userService, validationService) {
        this.formBuilder = formBuilder;
        this.projectsDataService = projectsDataService;
        this.userService = userService;
        this.validationService = validationService;
        //@Input() usersOptions: any[];
        this.projectUpdated = new core_1.EventEmitter();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editProjectForm = this.formBuilder.group({
            name: [this.project.name, forms_1.Validators.required],
            manager: [this.project.manager, forms_1.Validators.required]
        });
        this.editMode = false;
        this.usersOptions = [];
        /*---Form validation---*/
        this.formErrors = { name: { error: '', messages: '' }, manager: { error: '', messages: '' } };
        this.editProjectForm.valueChanges
            .subscribe(function (data) { return _this.formErrors = _this.validationService.onValueChanged(_this.editProjectForm, _this.formErrors, data); });
    };
    ProjectComponent.prototype.getManagersList = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.usersOptions = users.map(function (item) { return { key: item.id, label: item.first_name + ' ' + item.last_name }; }); });
    };
    ProjectComponent.prototype.showRowEditor = function () {
        var _this = this;
        if (!this.editMode) {
            this.userService.getUsers().then(function (users) {
                _this.usersOptions = users.map(function (item) { return { key: item.id, label: item.first_name + ' ' + item.last_name }; });
                //this.editProjectForm.setValue({name: this.project.name, manager: this.project.manager});
                _this.editMode = true;
            });
        }
    };
    ProjectComponent.prototype.hideRowEditor = function () {
        if (this.editMode == true) {
            this.editMode = false;
        }
    };
    ProjectComponent.prototype.editProject = function () {
        var _this = this;
        if (this.editProjectForm.valid) {
            var project = this.editProjectForm.value;
            project.id = this.project.id;
            this.projectsDataService.editProject(project).then(function () { return _this.projectUpdated.emit(); });
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.editProjectForm, this.formErrors);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectComponent.prototype, "projectUpdated", void 0);
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'app/modules/admin/components/project.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, projects_data_service_1.ProjectsDataService, user_data_service_1.UserService, validation_service_1.ValidationService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map