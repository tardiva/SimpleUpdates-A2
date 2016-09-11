import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Project } from './project';

@Injectable()
export class ProjectsDataService {
    
     //private projects : any;
     
     private projectsUrl = 'http://localhost:8000/api/projects';
     private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
        
    public getProjects(): Promise<Project[]> {
      
       return this.http.get(this.projectsUrl)
               .toPromise()
               .then(response => response.json().Projects as Project[])
               .catch(this.handleError); 
    }

   
    public addProject(project: Project) {
        
        const url = this.projectsUrl;
        return this.http
              .post(url, JSON.stringify(project), {headers: this.headers})
              .toPromise()
              .then(()=> null)
              .catch(this.handleError);
    }
  
}


