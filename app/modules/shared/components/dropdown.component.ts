import { Component, Input, forwardRef} from '@angular/core';
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

export class DropdownComponent implements ControlValueAccessor {
    
    private selectedLabel: string;
    private selectedIcon: string;
    
    constructor() {}
       
    /*writeValue(value: any) {
       if (value !== undefined) {
           /*if (value == 0 || value == '') {*/
        //this.selectedValue = value;
       // this.selectedLabel = this.placeholder;
      //  this.selectedIcon = '';
        //}
          /* else {
               let options = this.options;
               for (let option of options)
                   {if (option.key == value) {
                       this.selectedValue = option.key;
                       this.selectedLabel = option.label;
                       this.selectedIcon = option.icon;
                   }}
                   }*/
      // }
               
   // }
    
    writeValue(value: any) {
       
        if (this.placeholder) {
            this.selectedValue = value;
            this.selectedLabel = this.placeholder;
            this.selectedIcon = '';
        }
        else if (value !== undefined) {
               let options = this.options;
               console.log(options);
               for (let option of options)
                   {if (option.key == value) {
                       this.selectedValue = value;
                       this.selectedLabel = option.label;
                       this.selectedIcon = option.icon;
                   }}
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
        this.selectedIcon = option.icon;
        
        this.propagateChange(this.selectedValue);
        
        
        
    }
  
        
    @Input()  options: any[];
    @Input()  placeholder: string;
    @Input()  selectedValue: number;
    @Input()  hasErrors: boolean;
    
}

