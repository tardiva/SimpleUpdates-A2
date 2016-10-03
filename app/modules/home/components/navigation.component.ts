import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';


@Component({
  selector: 'navigation',
  templateUrl: 'app/modules/home/components/navigation.component.html'
  
})

export class NavigationComponent implements OnInit {
  
    private currentUserName: string;
    private isAdmin: boolean;
    private initTest: string;
    private isAdminLinkActive: boolean;
    
    constructor(private router: Router, private authService: AuthService, private userService: UserService) {
                                      
    }
          
    getCurrentUser() {
     
        this.authService.getCurrentUser().then(user => {this.currentUserName = user.first_name + " " + user.last_name;
                                                        this.isAdmin = user.is_admin;});
    }
        
    logout(event) {
        
        event.preventDefault();
        this.authService.logout();
    }
    
    ngOnInit() {
        
        this.getCurrentUser();
        this.isAdminLinkActive = this.router.isActive('/admin', false);
    }
}
