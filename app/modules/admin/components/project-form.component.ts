import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';

@Component({

  selector: 'project-form',
  templateUrl: 'app/modules/admin/components/project-form.component.html',
})

export class ProjectFormComponent implements OnInit {
  
  private newProjectForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService,
              private userService: UserService) {
  }

  ngOnInit() {

     this.newProjectForm = this.formBuilder.group({
        name: ['', Validators.required],
        manager: ['', Validators.required]  
     });
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
  
  @Input() usersOptions: any[];
  @Output() closeForm: EventEmitter<any> = new EventEmitter();
  @Output() newProject: EventEmitter<any> = new EventEmitter();    
  
}
