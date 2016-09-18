import { Component, OnInit } from '@angular/core';

import { AuthService } from '../login/auth.service';
import { UserService } from '../login/user-data.service';

import { User } from '../login/user';


@Component({
  selector: 'navigation',
  templateUrl: 'app/imports/navigation/navigation.component.html'
  
})

export class NavigationComponent implements OnInit {
  
    currentUserName: string;
    
    constructor(private authService: AuthService, private userService: UserService) {
                          
    }
    
    getCurrentUser() {
        
      this.userService.getCurrentUser().then(user => {this.currentUserName = user.first_name + " " + user.last_name; console.log(this.currentUserName)})
    }
        
    logout() {
    
      this.authService.logout();
    }
    
    ngOnInit() {
        
        this.getCurrentUser();
        //this.currentUserName = this.authService.currentUser.first_name + ' ' + this.authService.currentUser.last_name;
    }
}
