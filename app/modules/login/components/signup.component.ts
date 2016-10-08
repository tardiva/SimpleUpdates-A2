import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ValidationService }  from '../../../services/validation.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({

    selector: 'signup-form',
    templateUrl: 'app/modules/login/components/signup.component.html'
})

export class SignupFormComponent implements OnInit {

    private signupForm: FormGroup;
    private formErrors: any;
    private isEmailSent: boolean;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private validationService: ValidationService) {
    }

    ngOnInit() {

        this.signupForm = this.formBuilder.group({
            teamName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });

        this.formErrors = {
            teamName: {error: '', messages: ''},
            firstName: {error: '', messages: ''},
            lastName: {error: '', messages: ''},
            email: {error: '', messages: ''},
            password: {error: '', messages: ''}
        };
        this.signupForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.signupForm, this.formErrors, data));
    }

    private signup(): void {

        if (this.signupForm.valid) {
            let user = {
                tenantName: this.signupForm.value.teamName,
                firstName: this.signupForm.value.firstName,
                lastName: this.signupForm.value.lastName,
                email: this.signupForm.value.email,
                password: Md5.hashStr(this.signupForm.value.password)
            };

            this.authService.signUp(user)
                .then(() => {/*this.isEmailSent = true;*/
                });
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.signupForm, this.formErrors);
        }
    }
}
 
