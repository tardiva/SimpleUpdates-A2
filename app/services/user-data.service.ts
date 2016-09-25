import { Injectable } from '@angular/core';
import { httpAuth } from './httpAuth.service';

import { User } from '../models/user';

@Injectable()
export class UserService {
    
    private currentUserUrl = 'http://localhost:8000/api/current_user';
    private usersUrl = 'http://localhost:8000/api/users';
    private user: User;
    private users: User[];
                            
    constructor(private httpAuth: httpAuth) {
      
    }
    
    public getCurrentUser(): Promise<User> {
       
       
          return this.httpAuth.get(this.currentUserUrl)
              .then(user => this.user = user)
       
    }
    
    public getUsers(): Promise<User[]> {
              
       return this.httpAuth.get(this.usersUrl)
                  .then(users => this.users = users)
    }
}


