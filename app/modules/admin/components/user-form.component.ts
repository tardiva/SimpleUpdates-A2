import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../services/user-data.service';

import { User } from '../../../models/user';

@Component({

  selector: 'user-form',
  templateUrl: 'app/modules/admin/components/user-form.component.html',
})

export class UserFormComponent implements OnInit {
  
  private newUserForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {

     this.newUserForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        isAdmin: ['', Validators.required],
     });
  }
    
  private addUser(): void {
    
     /*if (this.newProjectForm.valid) {
        this.projectsDataService.addProject(this.newProjectForm.value)
            .then(()=> this.newProject.emit());
        this.resetForm();    
      }*/
  }
        
  private resetForm(): void {
   
     this.newUserForm.reset();
     this.closeForm.emit();
  }    
  
  @Output() closeForm: EventEmitter<any> = new EventEmitter();
  @Output() newUser: EventEmitter<any> = new EventEmitter();    
  
}