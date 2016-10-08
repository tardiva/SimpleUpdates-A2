import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
    
    private validationMessages: any;
        
    constructor() {
       
      this.validationMessages = {required: 'Required'};     
    }

    public onValueChanged(form: any, formErrors: any, data?: any) {

    if (!form) {
            return;
        }
        for (let el in formErrors) {
       
       formErrors[el] = {error: '', messages: ''};
       const control = form.controls[el];
                                
       if (control && control.dirty && !control.valid) {
          formErrors[el].error = true;
          const messages = this.validationMessages;
          for (const key in control.errors) {
             formErrors[el].messages += messages[key] + ' '; 
          } 
          
         //console.log('Validation service says:' + control.errors, formErrors);
        }
      }
        return formErrors;
      }
    
    public onSubmit(form: any, formErrors: any) {
        
          for (let el in formErrors) {
             formErrors[el] = {error: '', messages: ''}; 
             const control = form.controls[el];
             console.log(control);
             if (control && !control.valid) {
                 formErrors[el].error = true;
                 const messages = this.validationMessages;
                 for (const key in control.errors) {
                 formErrors[el].messages += messages[key] + ' '; 
          } 
             }
          }
          return formErrors;
    }
    
    
    
}
