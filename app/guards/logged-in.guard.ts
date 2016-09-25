import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    
      if (this.authService.isLoggedIn()) { return true; }
        else {
          this.authService.logout();  
          //this.router.navigate(['/login']);
          return false;
        }
  }
}