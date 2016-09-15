import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routes';
//import { AuthHttp } from 'angular2-jwt/angular2-jwt';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './imports/navigation/navigation.component';
import { UpdatesListComponent } from './imports/updates/updates-list.component';
import { ProjectsListComponent } from './imports/projects/projects-list.component';

import { httpAuth } from './imports/utils/httpAuth.service';
import { AuthService } from './imports/login/auth.service';
import { UserService } from './imports/login/user-data.service';
import { ProjectsDataService } from './imports/projects/projects-data.service';
import { UpdatesDataService } from './imports/updates/updates-data.service';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, NavigationComponent, UpdatesListComponent, ProjectsListComponent ],
  providers:    [ AuthService,
                  UserService,
                  ProjectsDataService,
                  UpdatesDataService,
                  httpAuth],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
