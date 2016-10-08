import { Component, OnInit } from '@angular/core';

import { UpdatesDataService } from '../../../services/updates-data.service';

import { Project} from '../../../models/project';

@Component({
    selector: 'updates',
    templateUrl: 'app/modules/home/components/updates-list.component.html',
})

export class UpdatesListComponent implements OnInit {

    private projects: Project[];

    constructor(private updatesDataService: UpdatesDataService) {
    }

    ngOnInit(): void {

        this.getProjectsWithLastUpdate();
    }

    getProjectsWithLastUpdate(): void {
        this.updatesDataService.getLastUpdates().then(projects => this.projects = projects)
    }
}




