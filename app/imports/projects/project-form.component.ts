import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DropdownComponent } from '../utils/dropdown.component';

import { ProjectsDataService } from './projects-data.service';

@Component({

  selector: 'project-form',
  templateUrl: 'app/imports/projects/project-form.component.html',
  directives: [DropdownComponent] 
    
  
})

export class ProjectFormComponent implements OnInit {
  
  private newProjectForm: FormGroup;
  usersOptions: any[];

  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService) {
  }

  ngOnInit() {

     this.newProjectForm = this.formBuilder.group({
        name: ['', Validators.required],
        manager: ['', Validators.required]  
     });
     this.usersOptions = [{key: 1, label: 'Anna Smith'}]; // stub 
  }
    
  private addProject(): void {
    
     if (this.newProjectForm.valid) {
        this.projectsDataService.addProject(this.newProjectForm.value)
            .then(()=> this.newProject.emit());
        this.resetForm();    
      }
  }
    
  private resetForm(): void {

   /*this.newProjectForm.controls['name']['updateValue']('');*/
     this.newProjectForm.reset();
     this.closeForm.emit();
  }    
    
  @Output() closeForm: EventEmitter<any> = new EventEmitter();
  @Output() newProject: EventEmitter<any> = new EventEmitter();    
  
}
