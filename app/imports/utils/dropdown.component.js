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
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.propagateChange = function (_) { };
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.selectedValue = value;
            this.selectedLabel = this.placeholder;
        }
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function () { };
    DropdownComponent.prototype.onSelect = function (option) {
        this.selectedValue = option.key;
        this.selectedLabel = option.label;
        this.propagateChange(this.selectedValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "selectedValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "hasErrors", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'dropdown',
            templateUrl: 'app/imports/utils/dropdown.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DropdownComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map