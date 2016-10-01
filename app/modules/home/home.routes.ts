import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { IsAdminGuard } from '../../guards/is-admin.guard';

import { HomeComponent }         from './components/home.component';
import { UpdatesListComponent }  from './components/updates-list.component';

const HOME_ROUTES: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        
        children: [
            { path: '', component: UpdatesListComponent },
            { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule', canActivate: [IsAdminGuard] }
        ]
    }
    
]

export const homeRouting: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);