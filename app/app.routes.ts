import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './modules/login/components/login.component';
import { SignupFormComponent } from './modules/login/components/signup.component';


/*const APP_ROUTES: Routes = [

    { path: '', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent }
];*/

const loginRoutes: Routes = [
    
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent }
];

const homeRoutes: Routes = [
    
    { path: '', loadChildren: 'app/modules/home/home.module#HomeModule' },
];

const APP_ROUTES: Routes = [
  
    ...loginRoutes,
    ...homeRoutes
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
