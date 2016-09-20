import { NgModule }      from '@angular/core';
import { SharedModule }  from '../shared/shared.module';

import { adminRouting } from './admin.routes';

import { ProjectsListComponent } from './components/projects-list.component';
import { ProjectFormComponent } from './components/project-form.component';


@NgModule({
  imports:      [ SharedModule, adminRouting ],
  declarations: [ ProjectsListComponent, ProjectFormComponent ],
  exports:      [ ],    
  providers:    [ ]
  })

export class AdminModule { }