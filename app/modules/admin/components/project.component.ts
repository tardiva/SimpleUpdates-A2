import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';

@Component({

  selector: 'project',
  templateUrl: 'app/modules/admin/components/project.component.html',
   
    
  
})

export class ProjectComponent implements OnInit {
  
  private editProjectForm: FormGroup;
  private usersOptions: any[];
    

  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService,
              private userService: UserService) {
  }

  ngOnInit() {

     this.editProjectForm = this.formBuilder.group({
        name: ['', Validators.required],
        manager: ['', Validators.required]  
     });
     this.getManagersList();
  }
      
  private getManagersList() {
      
     this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {return {key: item.id, label: item.first_name + ' ' + item.last_name}})) 
  }
    
  private selectRow(event) {
    
    let row = event.target.closest(".project-item");
    console.log(row);  
    row.classList.toggle("selected");
}      
    
  private showInput(project, event) {
    
    this.selectRow(event);  
    project.editMode = true;
}
    
  private isEditMode(project) {
    
    if (project.editMode && project.editMode == true) {return true}
      else {return false}
}   
  
  @Input() project: any;
  @Output() closeForm: EventEmitter<any> = new EventEmitter();
  @Output() newProject: EventEmitter<any> = new EventEmitter();    
  
}
