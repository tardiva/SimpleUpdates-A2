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
var user_data_service_1 = require('../../../services/user-data.service');
var validation_service_1 = require('../../../services/validation.service');
var UserFormComponent = (function () {
    function UserFormComponent(formBuilder, userService, validationService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.validationService = validationService;
        this.closeForm = new core_1.EventEmitter();
        this.newUser = new core_1.EventEmitter();
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newUserForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            isAdmin: [false],
        });
        this.formErrors = { firstName: { error: '', messages: '' }, lastName: { error: '', messages: '' }, email: { error: '', messages: '' } };
        this.newUserForm.valueChanges
            .subscribe(function (data) { return _this.formErrors = _this.validationService.onValueChanged(_this.newUserForm, _this.formErrors, data); });
    };
    UserFormComponent.prototype.addUser = function () {
        var _this = this;
        if (this.newUserForm.valid) {
            this.userService.addUser(this.newUserForm.value)
                .then(function () { return _this.newUser.emit(); });
            this.resetForm();
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.newUserForm, this.formErrors);
        }
    };
    UserFormComponent.prototype.resetForm = function () {
        this.newUserForm.reset();
        this.closeForm.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserFormComponent.prototype, "closeForm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserFormComponent.prototype, "newUser", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'app/modules/admin/components/user-form.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_data_service_1.UserService, validation_service_1.ValidationService])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map