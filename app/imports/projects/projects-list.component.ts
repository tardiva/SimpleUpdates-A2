import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';
import { ProjectFormComponent } from './project-form.component';

import { Project} from './project';
import { ProjectsDataService } from './projects-data.service';


@Component({
    
    selector: 'projects',
    templateUrl: 'app/imports/projects/projects-list.component.html',
    directives: [NavigationComponent, ProjectFormComponent],
        
}) 

export class ProjectsListComponent implements OnInit {
    
    projects: Project[];
    isFormHidden: boolean;
    
constructor(private projectsDataService: ProjectsDataService){
    
}

private getProjects(): void {
    this.projectsDataService.getProjects().then(projects => this.projects = projects);
        
}
    
private showNewForm(): void {
    if (this.isFormHidden == true)
    {this.isFormHidden = false;}
    else {this.isFormHidden = true;}
  }    
    
ngOnInit(): void {
    this.getProjects();
    this.isFormHidden = true;
}    
   
}
