import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Update } from './update';


@Injectable()
export class UpdatesDataService{
  
constructor(private http: Http) {
         
  }
        
    private updatesUrl = 'http://localhost:8000/api/updates';
    private lastUpdatesUrl = 'http://localhost:8000/api/last_updates';
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    public add(update: Update): Promise<void> {
        
        const url = this.updatesUrl;
        return this.http
              .post(url, JSON.stringify(update), {headers: this.headers})
              .toPromise()
              .then(()=> null)
              .catch(this.handleError);
    }
    
    public getLastUpdates(): Promise<any[]> {
              
       return this.http.get(this.lastUpdatesUrl)
               .toPromise()
               .then(response => response.json().Updates as any[])
               .catch(this.handleError);     
         } 
}

 

