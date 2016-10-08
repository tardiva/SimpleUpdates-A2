import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { UserService } from '../../../services/user-data.service';
import { Project} from '../../../models/project';

@Component({

    selector: 'projects',
    templateUrl: 'app/modules/admin/components/projects-list.component.html',

})

export class ProjectsListComponent implements OnInit {

    private projects: Project[];
    private isFormHidden: boolean;
    private usersOptions: any[];

    constructor(private projectsDataService: ProjectsDataService, private userService: UserService) {

    }

    ngOnInit(): void {

        this.getProjects();
        this.getManagersList();
        this.isFormHidden = true;
    }

    private getProjects(): void {

        this.projectsDataService.getProjects().then(projects => this.projects = projects);
    }

    private getManagersList() {

        this.userService.getUsers().then(users => this.usersOptions = users.map((item) => {
            return {key: item.id, label: item.first_name + ' ' + item.last_name}
        }))
    }

    private showNewForm(): void {
        if (this.isFormHidden == true) {
            this.isFormHidden = false;
        }
        else {
            this.isFormHidden = true;
        }
    }

}
