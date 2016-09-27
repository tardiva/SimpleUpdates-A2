import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { httpAuth } from './httpAuth.service';

import { User } from '../models/user';


@Injectable()
export class AuthService {
    
    private loginUrl = 'http://localhost:8000/api/login';
    private currentUserUrl = 'http://localhost:8000/api/current_user';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    public token: string;
    public currentUser: User;
    
        
    constructor(private router: Router, private http: Http, private httpAuth: httpAuth) {
                
        this.token = localStorage.getItem('auth_token');
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        
    }



    public getCurrentUser(): Promise<User> {
        
       if (this.currentUser) {
           return new Promise((resolve, reject) => { resolve (this.currentUser) });
       }
        
        else {
            return this.httpAuth.get(this.currentUserUrl)
            .then(user => this.currentUser = user);
        }
    }
    
    private handleError(error: any): Promise<any> {
        
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    public isLoggedIn() {
        
        if (localStorage.getItem('auth_token')) {return true}
        else {return false}
    }

    public isAdmin() {
        
        return this.currentUser.is_admin;
    }
            
    public login(user: User) {
    
        const url = this.loginUrl;
        return this.http
              .post(url, JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then((response) => {
                      let token = response.json() && response.json().token;
                      let user = response.json() && response.json().data;
                      if (token && user) {
                        this.token = token; 
                        localStorage.setItem('auth_token', token);
                        this.currentUser = user;
                        localStorage.setItem('user', JSON.stringify(user));  
                        this.router.navigate(['/']);
                      }
                      else {} //add 'user not found' error handling
              })
              .catch(this.handleError);
                         
    }
    
     public logout() {
         
        this.token = null;
        localStorage.removeItem('auth_token');
        this.currentUser = null;
        localStorage.removeItem('user'); 
        this.router.navigate(['/login']);
       
   }

}
