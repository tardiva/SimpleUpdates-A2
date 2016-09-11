"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./imports/login/login.component');
var signup_component_1 = require('./imports/login/signup.component');
var updates_list_component_1 = require('./imports/updates/updates-list.component');
var projects_list_component_1 = require('./imports/projects/projects-list.component');
var APP_ROUTES = [
    { path: '', component: login_component_1.LoginFormComponent },
    { path: 'signup', component: signup_component_1.SignupFormComponent },
    { path: 'updates', component: updates_list_component_1.UpdatesListComponent },
    { path: 'projects', component: projects_list_component_1.ProjectsListComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map