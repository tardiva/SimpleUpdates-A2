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
var md5_1 = require('ts-md5/dist/md5');
var SignupFormComponent = (function () {
    function SignupFormComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            teamName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    SignupFormComponent.prototype.signup = function () {
        if (this.signupForm.valid) {
            var user = { tenantName: this.signupForm.value.teamName,
                email: this.signupForm.value.email,
                password: md5_1.Md5.hashStr(this.signupForm.value.password) };
            this.authService.signUp(user)
                .then(function () { return null; });
        }
    };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/modules/login/components/signup.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup.component.js.map