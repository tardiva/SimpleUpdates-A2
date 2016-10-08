import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';


@Injectable()
export class httpAuth {
    
   
constructor(private http: Http, /*private authService: AuthService, */private router: Router) {
         
  }
       
    private handleError(error: any)/*: Promise<any>*/ {
        
        console.error('An error occurred', error.status);
        //return Promise.reject(error.message || error);
    }
    
    public get(url): Promise<any[]> {
              
       let authToken = localStorage.getItem('auth_token');
       let headers = new Headers({ 'x-access-token': authToken });
              
       return this.http.get(url, {headers: headers})
               .toPromise()
               .then(response => response.json().data as any[])
           .catch(error => {
               this.handleError(error);
               if (error.status == 401) {
                   this.router.navigate(['/login'])
               }
           });
    } 
    
    public post(url, data): Promise<void> {
                        
        let authToken = localStorage.getItem('auth_token');
        let headers = new Headers({'Content-Type': 'application/json', 'x-access-token': authToken});

        return this.http
              .post(url, JSON.stringify(data), {headers: headers})
              .toPromise()
              .then(()=> null)
              .catch(this.handleError);
    }
               
    public put(url, data): Promise<void> {
                        
        let authToken = localStorage.getItem('auth_token');
        let headers = new Headers({'Content-Type': 'application/json', 'x-access-token': authToken});

        return this.http
              .put(url, JSON.stringify(data), {headers: headers})
              .toPromise()
              .then(()=> null)
              .catch(this.handleError);
    }

}

