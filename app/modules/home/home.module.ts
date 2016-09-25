import { NgModule }      from '@angular/core';

import { SharedModule }  from '../shared/shared.module';

//import { AdminModule } from '../admin/admin.module'

import { homeRouting } from './home.routes';

import { HomeComponent } from './components/home.component';
import { NavigationComponent } from './components/navigation.component';
import { UpdatesListComponent } from './components/updates-list.component';
import { UpdateFormComponent } from './components/update-form.component';
import { UpdateComponent } from './components/update.component';

import { UpdatesDataService } from '../../services/updates-data.service';
import { ProjectsDataService } from '../../services/projects-data.service';


@NgModule({
  imports:      [ SharedModule, homeRouting/*, adminModule*/ ],
  declarations: [ HomeComponent, NavigationComponent, UpdatesListComponent, UpdateFormComponent, UpdateComponent ],
  exports:      [ ],    
  providers:    [ UpdatesDataService, ProjectsDataService ]
  })

export class HomeModule { }