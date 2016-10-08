import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-data.service';
import { ValidationService }  from '../../../services/validation.service';
import { User } from '../../../models/user';

@Component({

    selector: 'user',
    templateUrl: 'app/modules/admin/components/user.component.html',

})

export class UserComponent implements OnInit {

    private editUserForm: FormGroup;
    private editMode: Boolean;
    private formErrors: any;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private validationService: ValidationService) {
    }

    ngOnInit() {

        this.editUserForm = this.formBuilder.group({
            firstName: [this.user.first_name, Validators.required],
            lastName: [this.user.last_name, Validators.required],
            email: [this.user.email],
            isAdmin: [this.user.is_admin]
        });
        this.editMode = false;

        this.formErrors = {firstName: {error: '', messages: ''}, lastName: {error: '', messages: ''}};
        this.editUserForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.editUserForm, this.formErrors, data));
    }

    private editUser() {

        if (this.editUserForm.valid) {
            let user = this.editUserForm.value;
            user.id = this.user.id;
            this.userService.editUser(user).then(()=> this.userUpdated.emit())
        } else {
            this.formErrors = this.validationService.onSubmit(this.editUserForm, this.formErrors);
        }
    }

    private hideRowEditor() {

        if (this.editMode == true) {
            this.editMode = false;
        }
    }

    private showRowEditor() {

        if (!this.editMode) {
            this.editMode = true;
        }
    }

    private submit(event) {

        if (event.keyCode == 13) {
            this.editUser()
        }
    }

    @Input() user: any;
    @Output() userUpdated: EventEmitter<any> = new EventEmitter();

}
