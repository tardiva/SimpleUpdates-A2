import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Md5 } from 'ts-md5/dist/md5';

    @Component({
        
        selector: 'signup-form',
        templateUrl: 'app/modules/login/components/signup.component.html'
        })

export class SignupFormComponent implements OnInit {
    
    signupForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private authService: AuthService) {}
    
    ngOnInit() {

      this.signupForm = this.formBuilder.group({
        teamName: ['', Validators.required],  
        email: ['', Validators.required],
        password: ['', Validators.required]
        });
    }
    
    signup() {
        
        if (this.signupForm.valid) {
        let user = {tenantName: this.signupForm.value.teamName,
                    email: this.signupForm.value.email,
                    password: Md5.hashStr(this.signupForm.value.password)};
                  
        this.authService.signUp(user)
          .then(() => null);
        }
    }
}
 
