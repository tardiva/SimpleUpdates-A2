import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  private projectManager: User;
  private editMode: Boolean;
  private usersOptions: any[];
    

  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService,
              private userService: UserService) {
  }

  ngOnInit() {
            
     this.editProjectForm = this.formBuilder.group({
        name: [/*this.project.name*/'', Validators.required],
        manager: [/*this.project.manager*/'', Validators.required]  
     });
     this.editMode = false;
     this.usersOptions = [];
     
  }
    
  private getManagersList() {
      
     this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {return {key: item.id, label: item.first_name + ' ' + item.last_name}})) 
  }
      
  private showRowEditor() {
    
    if (!this.editMode) {
        this.editMode = true;
        this.userService.getUsers().then((users) => { 
          this.usersOptions = users.map((item) => {return {key: item.id, label: item.first_name + ' ' + item.last_name}});
          this.editProjectForm.setValue({name: this.project.name, manager: this.project.manager});
          console.log(this.editProjectForm.value);
        })
     }
  }
    
  private hideRowEditor() {
      
     if (this.editMode == true) {this.editMode = false;}
  }
    
  private editProject() {
      
      let project = this.editProjectForm.value;
      project.id = this.project.id;
      this.projectsDataService.editProject(project).then(()=> this.projectUpdated.emit())
      
      
  }
   
  @Input() project: any;
  
  @Output() projectUpdated: EventEmitter<any> = new EventEmitter(); 
 
  }
