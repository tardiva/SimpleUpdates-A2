import { Component, Input, OnChanges, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'dropdown',
    templateUrl: 'app/modules/shared/components/dropdown.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownComponent),
            multi: true
        }
    ]

})

export class DropdownComponent implements ControlValueAccessor, OnChanges {

    private selectedValue: number;
    private selectedLabel: string;
    private selectedIcon: string;

    constructor() {
    }

    ngOnChanges(options) {

        if (this.options && this.options.length > 0) {
            this.writeValue(this.selectedValue);
        }
    }

    get value(): any {
        return this.selectedValue;
    }

    set value(value: any) {
        if (value !== undefined && value !== this.selectedValue) {
            this.selectedValue = value;
            this.propagateChange(this.selectedValue);
        }
    }

    writeValue(value: any) {

        if (this.placeholder) {
            this.selectedValue = value;
            this.selectedLabel = this.placeholder;
            this.selectedIcon = '';
        }
        else if (value !== undefined) {
            this.selectedValue = value;
            let options = this.options;
            for (let option of options) {
                if (option.key == value) {
                    this.selectedLabel = option.label;
                    this.selectedIcon = option.icon;
                }
            }
        }
    }

    propagateChange = (_: any) => {
    };

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    onSelect(option) {
        this.selectedValue = option.key;
        this.selectedLabel = option.label;
        this.selectedIcon = option.icon;

        this.propagateChange(this.selectedValue);
    }


    @Input() options: any[];
    @Input() placeholder: string;
    //@Input()  selectedValue: number;
    @Input() hasErrors: boolean;

}

