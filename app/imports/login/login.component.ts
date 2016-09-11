import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';

import { Md5 } from 'ts-md5/dist/md5';

    @Component({
        
        selector: 'login-form',
        templateUrl: 'app/imports/login/login.component.html',
        })

export class LoginFormComponent implements OnInit {
    
    loginForm: FormGroup;
        
    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
            
    }
    
    ngOnInit() {

      this.loginForm = this.formBuilder.group({
        email: [''],
        password: ['']
        });
    }
    
    login() {
             
      const user = {email: this.loginForm.value.email, password: Md5.hashStr(this.loginForm.value.password)};
          
      this.authService.login(user)
          .then(() => null);
    }
     
}

