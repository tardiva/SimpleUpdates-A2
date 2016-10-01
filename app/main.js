"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var app_module_1 = require('./app.module');
//workaround for angular issue #9294
var XRSF_MOCK = { provide: http_1.XSRFStrategy, useValue: {
        configureRequest: function (req) { }
    } };
var injector = core_1.ReflectiveInjector.resolveAndCreate([http_1.HTTP_PROVIDERS, XRSF_MOCK]);
var http = injector.get(http_1.Http);
var currentUserUrl = 'http://localhost:8000/api/current_user';
if (localStorage.getItem('auth_token')) {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
    }
    http.get(currentUserUrl, { headers: { 'x-access-token': localStorage.getItem('auth_token') } })
        .toPromise()
        .then(function (response) {
        var user = response.json().data;
        localStorage.setItem('user', JSON.stringify(user));
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
    })
        .catch(function (error) {
        if (error.status == 401) {
            localStorage.removeItem('auth_token');
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
        else
            (console.log(error));
    });
}
else {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}
//# sourceMappingURL=main.js.map