import { Injectable } from '@angular/core';

import { httpAuth } from './httpAuth.service';
import { Project } from '../models/project';

@Injectable()
export class ProjectsDataService {
    
  private projects : Project[];
  private projectsUrl = 'http://localhost:8000/api/projects';
      
  constructor(private httpAuth: httpAuth) {
         
  }   
    
  public addProject(project: Project): Promise<void> {
        
    const url = this.projectsUrl;
                
    return this.httpAuth
               .post(url, project)
               .then(()=> null)
  }
    
  public getProjects(): Promise<Project[]> {
              
     return this.httpAuth.get(this.projectsUrl)
                .then(projects => this.projects = projects)
  }  
  
}


