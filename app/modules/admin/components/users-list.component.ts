import { Component, OnInit } from '@angular/core';

//import { ProjectFormComponent } from './project-form.component';
//import { ProjectComponent } from './project.component';

import { UserService } from '../../../services/user-data.service';
import { User} from '../../../models/user';


@Component({
    
    selector: 'users',
    templateUrl: 'app/modules/admin/components/users-list.component.html',
            
}) 

export class UsersListComponent implements OnInit {
    
    public users: User[];
    private isFormHidden: boolean;
            
constructor(private userService: UserService){
    
}

private getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
        
}


private closeForm() {
    
   /* this.isFormHidden = true;*/
}
    
private showNewForm(): void {
    if (this.isFormHidden == true)
    {this.isFormHidden = false;}
    else {this.isFormHidden = true;}
  } 
    
ngOnInit(): void {
    this.getUsers();
    this.isFormHidden = true;
}
    
   
}