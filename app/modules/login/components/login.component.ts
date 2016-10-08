import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ValidationService }  from '../../../services/validation.service';

import { Md5 } from 'ts-md5/dist/md5';

@Component({

    selector: 'login-form',
    templateUrl: 'app/modules/login/components/login.component.html',
})

export class LoginFormComponent implements OnInit {

    private loginForm: FormGroup;
    private formErrors: any;
    private isError: boolean;
    private errorMessage: string;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private validationService: ValidationService) {

    }

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.formErrors = {email: {error: '', messages: ''}, password: {error: '', messages: ''}};
        this.loginForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.loginForm, this.formErrors, data));

    }

    private login(): void {

        if (this.loginForm.valid) {
            const user = {email: this.loginForm.value.email, password: Md5.hashStr(this.loginForm.value.password)};

            this.authService.login(user)
                .then(() => null)
                .catch((error) => {
                    this.isError = true;
                    if (error.status == 401) {
                        this.errorMessage = 'Incorrect Email or Password'
                    }
                    else {
                        this.errorMessage = 'Internal server error'
                    }
                });
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.loginForm, this.formErrors);
        }
    }

}

