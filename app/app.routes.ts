import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './imports/login/login.component';
import { SignupFormComponent } from './imports/login/signup.component'
import { UpdatesListComponent } from './imports/updates/updates-list.component';
import { ProjectsListComponent } from './imports/projects/projects-list.component';

const APP_ROUTES: Routes = [

    { path: '', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'updates', component: UpdatesListComponent},
    { path: 'projects', component: ProjectsListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
