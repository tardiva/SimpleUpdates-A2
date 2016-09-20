import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    
    private loginUrl = 'http://localhost:8000/api/login';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    public token: string;
    public currentUser: User;
        
    constructor(private router: Router, private http: Http) {
        this.token = localStorage.getItem('auth_token');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
        
    public login(user: User) {
    
        const url = this.loginUrl;
        return this.http
              .post(url, JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then((response) => {
                      let token = response.json() && response.json().Token;
                      if (token) {
                        this.token = token; 
                        localStorage.setItem('auth_token', token);
                        //this.currentUser = response.json().User;  
                        this.router.navigate(['/']);}
                      else {} //user not found error
              })
              .catch(this.handleError);
                         
    }
    
     public logout() {
     
        //this.currentUser = null;  
        this.token = null;
        localStorage.removeItem('auth_token');
        //this.router.navigate(['/login']);
       
   }

}
