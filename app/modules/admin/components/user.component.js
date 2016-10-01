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
var UserComponent = (function () {
    function UserComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.userUpdated = new core_1.EventEmitter();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.editUserForm = this.formBuilder.group({
            firstName: [this.user.first_name, forms_1.Validators.required],
            lastName: [this.user.last_name, forms_1.Validators.required],
            email: [this.user.email, forms_1.Validators.required],
            isAdmin: [this.user.is_admin]
        });
        this.editMode = false;
    };
    UserComponent.prototype.showRowEditor = function () {
        if (!this.editMode) {
            this.editMode = true;
        }
    };
    UserComponent.prototype.hideRowEditor = function () {
        if (this.editMode == true) {
            this.editMode = false;
        }
    };
    UserComponent.prototype.editUser = function () {
        var _this = this;
        var user = this.editUserForm.value;
        user.id = this.user.id;
        console.log(user);
        this.userService.editUser(user).then(function () { return _this.userUpdated.emit(); });
    };
    UserComponent.prototype.submit = function (event) {
        if (event.keyCode == 13) {
            this.editUser();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserComponent.prototype, "userUpdated", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/modules/admin/components/user.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_data_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map