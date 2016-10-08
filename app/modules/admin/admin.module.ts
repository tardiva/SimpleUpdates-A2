import { NgModule }      from '@angular/core';
import { SharedModule }  from '../shared/shared.module';
import { adminRouting } from './admin.routes';
import { ProjectsListComponent } from './components/projects-list.component';
import { ProjectComponent } from './components/project.component';
import { ProjectFormComponent } from './components/project-form.component';
import { UsersListComponent } from './components/users-list.component';
import { UserComponent } from './components/user.component';
import { UserFormComponent } from './components/user-form.component';


@NgModule({
  imports:      [ SharedModule, adminRouting ],
  declarations: [ ProjectsListComponent, ProjectComponent, ProjectFormComponent, UsersListComponent, UserComponent, UserFormComponent ],
  exports:      [ ],    
  providers:    [ ]
  })

export class AdminModule { }