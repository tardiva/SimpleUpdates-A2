import { NgModule }      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from '../../app.routes';

import { LoginFormComponent } from './components/login.component';
import { SignupFormComponent } from './components/signup.component';


@NgModule({
  imports:      [ ReactiveFormsModule, CommonModule, routing ],
  declarations: [ LoginFormComponent, SignupFormComponent ],
  exports:      [ LoginFormComponent, SignupFormComponent ],    
  providers:    [ ]
  })

export class LoginModule { }