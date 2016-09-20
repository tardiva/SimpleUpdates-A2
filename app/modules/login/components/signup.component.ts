import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

    @Component({
        
        selector: 'signup-form',
        templateUrl: 'app/modules/login/components/signup.component.html'
        })

export class SignupFormComponent implements OnInit {
    
    signupForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}
    
    ngOnInit() {

      this.signupForm = this.formBuilder.group({
        teamName: [''],  
        email: [''],
        password: ['']
        });
    }
    
    signup() {
        
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
    }
 
}