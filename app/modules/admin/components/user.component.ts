import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';

@Component({

  selector: 'user',
  templateUrl: 'app/modules/admin/components/user.component.html',

})

export class UserComponent implements OnInit {
  
  private editUserForm: FormGroup;
  private editMode: Boolean;
 
  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
            
     this.editUserForm = this.formBuilder.group({
             firstName: [this.user.first_name, Validators.required],
             lastName: [this.user.last_name, Validators.required],
             email: [this.user.email, Validators.required],
             isAdmin: [this.user.is_admin]
     });
     this.editMode = false;
  }
      
  private showRowEditor() {
    
    if (!this.editMode) {
        this.editMode = true;
        }
  }
    
  private hideRowEditor() {
      
     if (this.editMode == true) {this.editMode = false;}
  }
    
  private editUser() {
      
      let user = this.editUserForm.value;
      user.id = this.user.id;
      console.log(user);
      this.userService.editUser(user).then(()=> this.userUpdated.emit())
  }
    
  private submit(event)  {
      
      if (event.keyCode == 13) {this.editUser()}
  }
   
  @Input() user: any;
  
  @Output() userUpdated: EventEmitter<any> = new EventEmitter(); 
 
  }
