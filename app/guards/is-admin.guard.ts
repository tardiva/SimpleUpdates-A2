import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsAdminGuard implements CanActivate {
    
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    
      if ( this.authService.isLoggedIn() && this.authService.isAdmin()) { 
          return true; }
      
          else if ( this.authService.isLoggedIn() && !this.authService.isAdmin()) {
               this.authService.logout();
               return false;
          }
      
          else { 
              this.authService.logout(); console.error('current user is not available'); return false; 
          } //temporary value
  }
}