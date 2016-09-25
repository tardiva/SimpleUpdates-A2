import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';

import { CoreModule }  from './modules/core/core.module';
import { LoginModule }  from './modules/login/login.module';

@NgModule({
  imports:      [ BrowserModule, routing, CoreModule, LoginModule ],
  declarations: [ AppComponent ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
    
}
