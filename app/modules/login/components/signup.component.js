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
var auth_service_1 = require('../../../services/auth.service');
var validation_service_1 = require('../../../services/validation.service');
var md5_1 = require('ts-md5/dist/md5');
var SignupFormComponent = (function () {
    function SignupFormComponent(formBuilder, authService, validationService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validationService = validationService;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signupForm = this.formBuilder.group({
            teamName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.formErrors = { teamName: { error: '', messages: '' }, email: { error: '', messages: '' }, password: { error: '', messages: '' } };
        this.signupForm.valueChanges
            .subscribe(function (data) { return _this.formErrors = _this.validationService.onValueChanged(_this.signupForm, _this.formErrors, data); });
    };
    SignupFormComponent.prototype.signup = function () {
        var _this = this;
        if (this.signupForm.valid) {
            var user = { tenantName: this.signupForm.value.teamName,
                email: this.signupForm.value.email,
                password: md5_1.Md5.hashStr(this.signupForm.value.password) };
            this.authService.signUp(user)
                .then(function () { _this.isEmailSent = true; });
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.signupForm, this.formErrors);
        }
    };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/modules/login/components/signup.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, validation_service_1.ValidationService])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup.component.js.map