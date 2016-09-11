import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { NavigationComponent } from './imports/navigation/navigation.component';
import { UpdatesListComponent } from './imports/updates/updates-list.component';
import { ProjectsListComponent } from './imports/projects/projects-list.component';

import { AuthService } from './imports/login/auth.service';
import { ProjectsDataService } from './imports/projects/projects-data.service';
import { UpdatesDataService } from './imports/updates/updates-data.service';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,HttpModule, routing ],
  declarations: [ AppComponent, NavigationComponent, UpdatesListComponent, ProjectsListComponent ],
  providers:    [ AuthService, ProjectsDataService, UpdatesDataService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
