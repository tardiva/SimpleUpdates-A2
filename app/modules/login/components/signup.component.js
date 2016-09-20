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
var SignupFormComponent = (function () {
    function SignupFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            teamName: [''],
            email: [''],
            password: ['']
        });
    };
    SignupFormComponent.prototype.signup = function () {
        /*const controls = this.signupForm.controls;
 
        Accounts.createUser({
          email: controls.email.value,
          password: controls.password.value,
          /*profile: {
                    firstName: controls.firstName.value,
                    lastName: controls.lastName.value
         },
         isAdmin: controls.isAdmin.value,
         tenantId: tenantId
        });*/
    };
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            templateUrl: 'app/modules/login/components/signup.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup.component.js.map