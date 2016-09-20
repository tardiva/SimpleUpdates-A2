import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';

@Component({

  selector: 'project-form',
  templateUrl: 'app/modules/admin/components/project-form.component.html',
  //directives: [DropdownComponent] 
    
  
})

export class ProjectFormComponent implements OnInit {
  
  private newProjectForm: FormGroup;
  usersOptions: any[];
    

  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService,
              private userService: UserService) {
  }

  ngOnInit() {

     this.newProjectForm = this.formBuilder.group({
        name: ['', Validators.required],
        manager: ['', Validators.required]  
     });
     this.getManagersList();
  }
    
  private addProject(): void {
    
     if (this.newProjectForm.valid) {
        this.projectsDataService.addProject(this.newProjectForm.value)
            .then(()=> this.newProject.emit());
        this.resetForm();    
      }
  }
    
  private getManagersList() {
      
     this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {return {key: item.id, label: item.first_name + ' ' + item.last_name}})) 
  }    
    
  private resetForm(): void {

   /*this.newProjectForm.controls['name']['updateValue']('');*/
     this.newProjectForm.reset();
     this.closeForm.emit();
  }    
    
  @Output() closeForm: EventEmitter<any> = new EventEmitter();
  @Output() newProject: EventEmitter<any> = new EventEmitter();    
  
}
