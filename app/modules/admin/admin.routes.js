"use strict";
var router_1 = require('@angular/router');
var projects_list_component_1 = require('./components/projects-list.component');
var ADMIN_ROUTES = [
    {
        path: '',
        component: projects_list_component_1.ProjectsListComponent
    }
];
exports.adminRouting = router_1.RouterModule.forChild(ADMIN_ROUTES);
//# sourceMappingURL=admin.routes.js.map