"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var updates_list_component_1 = require('./components/updates-list.component');
var HOME_ROUTES = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', component: updates_list_component_1.UpdatesListComponent },
            { path: 'projects', loadChildren: 'app/modules/admin/admin.module#AdminModule' }
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(HOME_ROUTES);
//# sourceMappingURL=home.routes.js.map