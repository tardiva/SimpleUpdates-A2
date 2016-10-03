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
var updates_data_service_1 = require('../../../services/updates-data.service');
var validation_service_1 = require('../../../services/validation.service');
var UpdateFormComponent = (function () {
    function UpdateFormComponent(formBuilder, projectsDataService, updatesDataService, validationService) {
        this.formBuilder = formBuilder;
        this.projectsDataService = projectsDataService;
        this.updatesDataService = updatesDataService;
        this.validationService = validationService;
        this.newUpdate = new core_1.EventEmitter();
    }
    UpdateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newUpdateForm = this.formBuilder.group({
            status: ['', forms_1.Validators.required],
            project: ['', forms_1.Validators.required],
            text: ['', forms_1.Validators.required],
        });
        this.getProjectsList();
        this.statusesOptions = [{ key: 1, label: 'High', icon: 'circle red' },
            { key: 2, label: 'Medium', icon: 'circle yellow' },
            { key: 3, label: 'Low', icon: 'circle green' }];
        this.formErrors = { status: { error: '', messages: '' }, project: { error: '', messages: '' }, text: { error: '', messages: '' } };
        this.newUpdateForm.valueChanges
            .subscribe(function (data) { return _this.formErrors = _this.validationService.onValueChanged(_this.newUpdateForm, _this.formErrors, data); });
    };
    UpdateFormComponent.prototype.addUpdate = function () {
        var _this = this;
        if (this.newUpdateForm.valid) {
            this.updatesDataService.add(this.newUpdateForm.value)
                .then(function () { return _this.newUpdate.emit(); });
            this.resetForm();
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.newUpdateForm, this.formErrors);
        }
    };
    UpdateFormComponent.prototype.getProjectsList = function () {
        var _this = this;
        this.projectsDataService.getProjects()
            .then(function (projects) { return _this.projectsOptions = projects.map(function (item) { return { key: item.id, label: item.name }; }); });
    };
    UpdateFormComponent.prototype.resetForm = function () {
        this.newUpdateForm.reset();
        var el = document.getElementById('new-update-text'); //to be reworked
        el.style.height = '33px';
    };
    UpdateFormComponent.prototype.resize = function (event) {
        var el = event.target;
        el.style.height = el.scrollHeight + 'px';
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UpdateFormComponent.prototype, "newUpdate", void 0);
    UpdateFormComponent = __decorate([
        core_1.Component({
            selector: 'update-form',
            templateUrl: 'app/modules/home/components/update-form.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, projects_data_service_1.ProjectsDataService, updates_data_service_1.UpdatesDataService, validation_service_1.ValidationService])
    ], UpdateFormComponent);
    return UpdateFormComponent;
}());
exports.UpdateFormComponent = UpdateFormComponent;
//# sourceMappingURL=update-form.component.js.map