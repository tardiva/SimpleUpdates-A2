import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    
    private loginUrl = 'http://localhost:8000/api/login';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private router: Router, private http: Http) {
          
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
    public getCurrentUser() {
        
        return {fullName: 'Anna Smith'};
    }
    
    public login(user: User) {
    
        const url = this.loginUrl;
        return this.http
              .post(url, JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then((response) => {if (response.json().Success === true) {this.router.navigate(['/updates']);}})
              .catch(this.handleError);
                         
    }
    
     public logout() {
    
        this.router.navigate(['/']);
       
   }

}
