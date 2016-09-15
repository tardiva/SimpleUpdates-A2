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
var projects_data_service_1 = require('../projects/projects-data.service');
var updates_data_service_1 = require('./updates-data.service');
var UpdateFormComponent = (function () {
    function UpdateFormComponent(formBuilder, projectsDataService, updatesDataService) {
        this.formBuilder = formBuilder;
        this.projectsDataService = projectsDataService;
        this.updatesDataService = updatesDataService;
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
        this.statusesOptions = [{ key: 1, label: 'High' },
            { key: 2, label: 'Medium' },
            { key: 3, label: 'Low' }];
        this.newUpdateForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        this.formErrors = { status: '', project: '', text: '' };
    };
    UpdateFormComponent.prototype.addUpdate = function () {
        var _this = this;
        console.log(this.newUpdateForm.valid + " " + this.newUpdateForm.dirty);
        if (this.newUpdateForm.valid) {
            this.updatesDataService.add(this.newUpdateForm.value)
                .then(function () { return _this.newUpdate.emit(); });
            this.resetForm();
        }
        else {
            var form = this.newUpdateForm;
            for (var el in this.formErrors) {
                var control = form.controls[el];
                if (control && !control.valid) {
                    this.formErrors[el] = true;
                }
            }
        }
    };
    UpdateFormComponent.prototype.getProjectsList = function () {
        var _this = this;
        this.projectsDataService.getProjects()
            .then(function (projects) { return _this.projectsOptions = projects.map(function (item) { return { key: item.id, label: item.name }; }); });
    };
    UpdateFormComponent.prototype.onValueChanged = function (data) {
        if (!this.newUpdateForm) {
            return;
        }
        ;
        var form = this.newUpdateForm;
        for (var el in this.formErrors) {
            this.formErrors[el] = '';
            var control = form.controls[el];
            if (control && control.dirty && !control.valid) {
                this.formErrors[el] = true;
            }
        }
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
            templateUrl: 'app/imports/updates/update-form.component.html',
            directives: [dropdown_component_1.DropdownComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, projects_data_service_1.ProjectsDataService, updates_data_service_1.UpdatesDataService])
    ], UpdateFormComponent);
    return UpdateFormComponent;
}());
exports.UpdateFormComponent = UpdateFormComponent;
//# sourceMappingURL=update-form.component.js.map