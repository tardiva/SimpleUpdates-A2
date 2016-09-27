import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReflectiveInjector } from '@angular/core';
import { HTTP_PROVIDERS, Http, XSRFStrategy } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppModule } from './app.module';


//workaround for angular issue #9294
var XRSF_MOCK = { provide: XSRFStrategy, useValue: {
    configureRequest: function(req) { /* */ }
} };


var injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS,  XRSF_MOCK]);
var http = injector.get(Http);

var currentUserUrl = 'http://localhost:8000/api/current_user';

if (localStorage.getItem('auth_token')) {
    
  if (localStorage.getItem('user')) {localStorage.removeItem('user');
  }
  http.get(currentUserUrl, {headers: {'x-access-token': localStorage.getItem('auth_token')}})
    .toPromise()
    .then((response) => {
          let user = response.json().data;
          //window.currentUser = user;
          localStorage.setItem('user', JSON.stringify(user));
          platformBrowserDynamic().bootstrapModule(AppModule);
          });
}

    else { platformBrowserDynamic().bootstrapModule(AppModule); }

// the use case when auth token exists but expired (invalid) - how to handle?


