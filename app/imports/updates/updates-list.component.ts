import { Component, OnInit } from '@angular/core';

import { UpdateFormComponent } from './update-form.component';
import { UpdateComponent } from './update.component';

import { Project} from '../projects/project';
import { ProjectsDataService } from '../projects/projects-data.service';
import { UpdatesDataService } from './updates-data.service';

@Component({
  selector: 'updates',
  templateUrl: 'app/imports/updates/updates-list.component.html',
  directives: [ UpdateFormComponent, UpdateComponent]
    
})

export class UpdatesListComponent implements OnInit{
                
projects: Project[];
    
constructor(private projectsDataService: ProjectsDataService, private updatesDataService: UpdatesDataService){
    
}

getProjects(): void {
    //this.projectsDataService.getProjects().then(projects => this.projects = projects);
    this.updatesDataService.getLastUpdates().then(projects => this.projects = projects)
            
}
    
ngOnInit(): void {
    this.getProjects();
    //console.log(this.projects);
}    
   
    
}




