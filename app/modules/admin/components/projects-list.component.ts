import { Component, OnInit } from '@angular/core';

import { ProjectFormComponent } from './project-form.component';

import { Project} from '../../../models/project';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';


@Component({
    
    selector: 'projects',
    templateUrl: 'app/modules/admin/components/projects-list.component.html',
    //directives: [ ProjectFormComponent],
        
}) 

export class ProjectsListComponent implements OnInit {
    
    projects: Project[];
    isFormHidden: boolean;
    usersOptions: any[];
        
constructor(private projectsDataService: ProjectsDataService, private userService: UserService){
    
}

private getProjects(): void {
    this.projectsDataService.getProjects().then(projects => this.projects = projects);
        
}
    
private getManagersList() {
      
     this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {return {key: item.id, label: item.first_name + ' ' + item.last_name}})) 
  }     
    
private showNewForm(): void {
    if (this.isFormHidden == true)
    {this.isFormHidden = false;}
    else {this.isFormHidden = true;}
  } 
    
private showInput(project) {
    
    project.editMode = true;
}
    
private isEditMode(project) {
    
    if (project.editMode && project.editMode == true) {return true}
      else {return false}
}   
    
ngOnInit(): void {
    this.getProjects();
    this.getManagersList();
    this.isFormHidden = true;
}    
   
}
