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
    DropdownComponent.prototype.ngOnChanges = function (options) {
        if (this.options && this.options.length > 0) {
            this.writeValue(this.selectedValue);
        }
        ;
    };
    Object.defineProperty(DropdownComponent.prototype, "value", {
        get: function () {
            return this.selectedValue;
        },
        set: function (value) {
            if (value !== undefined && value !== this.selectedValue) {
                this.selectedValue = value;
                this.propagateChange(this.selectedValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.writeValue = function (value) {
        if (this.placeholder) {
            this.selectedValue = value;
            this.selectedLabel = this.placeholder;
            this.selectedIcon = '';
        }
        else if (value !== undefined) {
            this.selectedValue = value;
            var options = this.options;
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                if (option.key == value) {
                    this.selectedLabel = option.label;
                    this.selectedIcon = option.icon;
                }
            }
        }
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function () { };
    DropdownComponent.prototype.onSelect = function (option) {
        this.selectedValue = option.key;
        this.selectedLabel = option.label;
        this.selectedIcon = option.icon;
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
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "hasErrors", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'dropdown',
            templateUrl: 'app/modules/shared/components/dropdown.component.html',
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