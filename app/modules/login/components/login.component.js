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
var LoginFormComponent = (function () {
    function LoginFormComponent(formBuilder, authService, validationService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validationService = validationService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.formErrors = { email: { error: '', messages: '' }, password: { error: '', messages: '' } };
        this.loginForm.valueChanges
            .subscribe(function (data) { return _this.formErrors = _this.validationService.onValueChanged(_this.loginForm, _this.formErrors, data); });
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var user = { email: this.loginForm.value.email, password: md5_1.Md5.hashStr(this.loginForm.value.password) };
            this.authService.login(user)
                .then(function () { return null; })
                .catch(function (error) {
                _this.isError = true;
                if (error.status == 401) {
                    _this.errorMessage = 'Incorrect Email or Password';
                }
                else {
                    _this.errorMessage = 'Internal server error';
                }
                ;
            });
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.loginForm, this.formErrors);
        }
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/modules/login/components/login.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, validation_service_1.ValidationService])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login.component.js.map