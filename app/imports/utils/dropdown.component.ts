import { Component, Input, OnInit, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: 'app/imports/utils/dropdown.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]    
  
})

export class DropdownComponent implements ControlValueAccessor, OnInit {
    
    private selectedLabel: string;
    
    constructor() {}
    
    ngOnInit() {
               
    }
        
    writeValue(value: any) {
       if (value !== undefined) {
        this.selectedValue = value;
        this.selectedLabel = this.placeholder;   
       }
        
    }
    
    propagateChange = (_: any) => {};
    
    registerOnChange(fn) {
       this.propagateChange = fn; 
    }

    registerOnTouched() {}
    
    onSelect(option) {
        this.selectedValue = option.key;
        this.selectedLabel = option.label;
        
        this.propagateChange(this.selectedValue);
        
        
        
    }
  
        
    @Input()  options: any[];
    @Input()  placeholder: string;
    @Input()  selectedValue: number;
    @Input()  hasErrors: boolean;
    
}

