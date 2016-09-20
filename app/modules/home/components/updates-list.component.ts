import { Component, OnInit } from '@angular/core';

import { UpdateFormComponent } from './update-form.component';
import { UpdateComponent } from './update.component';

import { Project} from '../../../models/project';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { UpdatesDataService } from '../../../services/updates-data.service';

@Component({
  selector: 'updates',
  templateUrl: 'app/modules/home/components/updates-list.component.html',
  //directives: [ UpdateFormComponent, UpdateComponent]
    
})

export class UpdatesListComponent implements OnInit{
                
projects: Project[];
    
constructor(private projectsDataService: ProjectsDataService, private updatesDataService: UpdatesDataService){
    
}

getProjectsWithLastUpdate(): void {
    this.updatesDataService.getLastUpdates().then(projects => this.projects = projects)
            
}
    
ngOnInit(): void {
    this.getProjectsWithLastUpdate();
    
}    
   
    
}




