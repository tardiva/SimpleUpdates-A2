import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { ValidationService }  from '../../../services/validation.service';

@Component({

    selector: 'project-form',
    templateUrl: 'app/modules/admin/components/project-form.component.html',
})

export class ProjectFormComponent implements OnInit {

    private newProjectForm: FormGroup;
    private formErrors: any;

    constructor(private formBuilder: FormBuilder,
                private projectsDataService: ProjectsDataService,
                private validationService: ValidationService) {
    }

    ngOnInit() {

        this.newProjectForm = this.formBuilder.group({
            name: ['', Validators.required],
            manager: ['', Validators.required]
        });

        this.formErrors = {name: {error: '', messages: ''}, manager: {error: '', messages: ''}};

        this.newProjectForm.valueChanges
            .subscribe(data => this.formErrors = this.validationService.onValueChanged(this.newProjectForm, this.formErrors, data));
    }

    private addProject(): void {

        if (this.newProjectForm.valid) {
            this.projectsDataService.addProject(this.newProjectForm.value)
                .then(()=> this.newProject.emit());
            this.resetForm();
        }
        else {
            this.formErrors = this.validationService.onSubmit(this.newProjectForm, this.formErrors);
        }
    }

    private resetForm(): void {

        this.newProjectForm.reset();
        this.closeForm.emit();
    }

    @Input() usersOptions: any[];
    @Output() closeForm: EventEmitter<any> = new EventEmitter();
    @Output() newProject: EventEmitter<any> = new EventEmitter();

}
