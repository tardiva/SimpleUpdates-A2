import { Component, OnInit } from '@angular/core';

import { ProjectFormComponent } from './project-form.component';

import { Project} from '../../../models/project';
import { ProjectsDataService } from '../../../services/projects-data.service';


@Component({
    
    selector: 'projects',
    templateUrl: 'app/modules/admin/components/projects-list.component.html',
    //directives: [ ProjectFormComponent],
        
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
