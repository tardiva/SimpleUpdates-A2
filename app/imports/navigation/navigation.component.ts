import { Component } from '@angular/core';

import { AuthService } from '../login/auth.service';


@Component({
  selector: 'navigation',
  templateUrl: 'app/imports/navigation/navigation.component.html'
  
})

export class NavigationComponent {
  
    currentUserName: string;
    
    constructor(private authService: AuthService) {
           
    this.currentUserName = this.authService.getCurrentUser().fullName;   
              
    }
    
    
    logout() {
    
      this.authService.logout();
    }
}