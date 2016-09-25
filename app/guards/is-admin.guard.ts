import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsAdminGuard implements CanActivate {
    
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    
      if ( this.authService.currentUser && this.authService.currentUser.is_admin == true) {return true;}
      
          else if (this.authService.currentUser && this.authService.currentUser.is_admin == false) {
               this.authService.logout();
               return false;
      }
      
      else { return true } //temporary value
         
      
      
  }
}