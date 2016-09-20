import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ProjectsListComponent }  from './components/projects-list.component';

const ADMIN_ROUTES: Routes = [
    
    {
        path: '',
        component: ProjectsListComponent
       
    }
]

export const adminRouting: ModuleWithProviders = RouterModule.forChild(ADMIN_ROUTES);