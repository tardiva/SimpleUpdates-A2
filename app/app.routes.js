"use strict";
var router_1 = require('@angular/router');
var logged_in_guard_1 = require('./guards/logged-in.guard');
var login_component_1 = require('./modules/login/components/login.component');
var signup_component_1 = require('./modules/login/components/signup.component');
/*const APP_ROUTES: Routes = [

    { path: '', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent }
];*/
var loginRoutes = [
    { path: 'login', component: login_component_1.LoginFormComponent },
    { path: 'signup', component: signup_component_1.SignupFormComponent }
];
var homeRoutes = [
    { path: '', loadChildren: 'app/modules/home/home.module#HomeModule', canActivate: [logged_in_guard_1.LoggedInGuard] },
];
var APP_ROUTES = loginRoutes.concat(homeRoutes);
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map