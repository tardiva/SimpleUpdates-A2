import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';
import { ValidationService }  from '../../../services/validation.service';
import { User } from '../../../models/user';


@Component({

    selector: 'project',
    templateUrl: 'app/modules/admin/components/project.component.html',

})

export class ProjectComponent implements OnInit {

    private editProjectForm: FormGroup;
    private editMode: Boolean;
    private usersOptions: any[];
    private formErrors: any;

    constructor(private formBuilder: FormBuilder,
                private projectsDataService: ProjectsDataService,
                private userService: UserService,
                private validationService: ValidationService) {
    }

    ngOnInit() {

        this.editProjectForm = this.formBuilder.group({
            name: [this.project.name, Validators.required],
            manager: [this.project.manager, Validators.required]
        });

        this.editMode = false;
        this.usersOptions = [];

        /*---Form validation---*/
        this.formErrors = {name: {error: '', messages: ''}, manager: {error: '', messages: ''}};
        this.editProjectForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.editProjectForm, this.formErrors, data));
    }

    private editProject() {

        if (!this.editProjectForm.valid) {
            this.formErrors = this.validationService.onSubmit(this.editProjectForm, this.formErrors);
        } else {
            let project = this.editProjectForm.value;
            project.id = this.project.id;
            this.projectsDataService.editProject(project).then(()=> this.projectUpdated.emit())
        }
    }

    private getManagersList() {

        this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {
            return {key: item.id, label: item.first_name + ' ' + item.last_name}
        }))
    }

    private showRowEditor() {

        if (!this.editMode) {
            this.userService.getUsers().then((users) => {
                this.usersOptions = users.map((item) => {
                    return {key: item.id, label: item.first_name + ' ' + item.last_name}
                });
                this.editMode = true;
            })
        }
    }

    private hideRowEditor() {

        if (this.editMode == true) {
            this.editMode = false;
            this.editProjectForm.setValue({name: this.project.name, manager: this.project.manager});
        }
    }

    @Input() project: any;
    @Output() projectUpdated: EventEmitter<any> = new EventEmitter();

}