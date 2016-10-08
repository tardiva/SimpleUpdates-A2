import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-data.service';
import { ValidationService }  from '../../../services/validation.service';
import { User } from '../../../models/user';

@Component({

    selector: 'user-form',
    templateUrl: 'app/modules/admin/components/user-form.component.html',
})

export class UserFormComponent implements OnInit {

    private newUserForm: FormGroup;
    private formErrors: any;


    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private validationService: ValidationService) {
    }

    ngOnInit() {

        this.newUserForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            isAdmin: [false],
        });

        this.formErrors = {
            firstName: {error: '', messages: ''},
            lastName: {error: '', messages: ''},
            email: {error: '', messages: ''},
            password: {error: '', messages: ''}
        };
        this.newUserForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.newUserForm, this.formErrors, data));

    }

    private addUser(): void {

        if (this.newUserForm.valid) {
            this.userService.addUser(this.newUserForm.value)
                .then(()=> this.newUser.emit());
            this.resetForm();
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.newUserForm, this.formErrors);
        }

    }

    private resetForm(): void {

        this.newUserForm.reset();
        this.closeForm.emit();
    }

    @Output() closeForm: EventEmitter<any> = new EventEmitter();
    @Output() newUser: EventEmitter<any> = new EventEmitter();

}