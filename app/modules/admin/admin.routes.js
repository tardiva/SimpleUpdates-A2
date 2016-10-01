"use strict";
var router_1 = require('@angular/router');
var projects_list_component_1 = require('./components/projects-list.component');
var users_list_component_1 = require('./components/users-list.component');
var ADMIN_ROUTES = [
    { path: 'projects',
        component: projects_list_component_1.ProjectsListComponent
    },
    { path: 'users',
        component: users_list_component_1.UsersListComponent
    },
];
exports.adminRouting = router_1.RouterModule.forChild(ADMIN_ROUTES);
//# sourceMappingURL=admin.routes.js.map