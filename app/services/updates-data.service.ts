import { Injectable } from '@angular/core';

import { httpAuth } from './httpAuth.service';
import { Update } from '../models/update';


@Injectable()
export class UpdatesDataService {
    
 private updatesUrl: string = 'http://localhost:8000/api/updates';
 private lastUpdatesUrl: string = 'http://localhost:8000/api/last_updates';
 private projects: any[];

 constructor(private httpAuth: httpAuth) {
         
 }   
    
 public add(update: Update): Promise<void> {
        
   const url = this.updatesUrl;
                
   return this.httpAuth
              .post(url, update)
              .then(()=> null)
  }
    
  public getLastUpdates(): Promise<any[]> {
              
       return this.httpAuth.get(this.lastUpdatesUrl)
                  .then(projects => this.projects = projects)
  }  
    
}


