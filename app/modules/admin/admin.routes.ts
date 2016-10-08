import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ProjectsListComponent }  from './components/projects-list.component';
import { UsersListComponent } from './components/users-list.component';


const ADMIN_ROUTES: Routes = [
    
    {   path: 'projects',
        component: ProjectsListComponent       
    },
    
    {   path: 'users',
        component: UsersListComponent       
    },
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTES);