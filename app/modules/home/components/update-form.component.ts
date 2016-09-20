import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import { DropdownComponent } from '../../shared/components/dropdown.component';

import { Project} from '../../../models/project';
import { Update} from '../../../models/update';
import { ProjectsDataService } from '../../../services/projects-data.service';
import { UpdatesDataService } from '../../../services/updates-data.service';

@Component({

  selector: 'update-form',
  templateUrl: 'app/modules/home/components/update-form.component.html',
  //directives: [ DropdownComponent ]    
  
})

export class UpdateFormComponent implements OnInit {

  private newUpdateForm: FormGroup;
  projectsOptions: any[]; 
  statusesOptions: any[];
  formErrors: any;    
  
  constructor(private formBuilder: FormBuilder,
              private projectsDataService: ProjectsDataService,
              private updatesDataService: UpdatesDataService) {
           
  }
    
  ngOnInit() {
    
     this.newUpdateForm = this.formBuilder.group({
       status: ['', Validators.required],
       project: ['', Validators.required],
       text: ['', Validators.required],
     });
     this.getProjectsList();
      
     this.statusesOptions = [{key:1, label: 'High', icon: 'circle red'},
                             {key:2, label: 'Medium', icon: 'circle yellow'},
                             {key:3, label: 'Low', icon: 'circle green'}];
          
     this.newUpdateForm.valueChanges
         .subscribe(data => this.onValueChanged(data));
      
     this.onValueChanged();
      
     this.formErrors = {status: '', project: '', text: ''} 
     
  }  
    
  private addUpdate(): void {
      
     console.log(this.newUpdateForm.valid +" "+ this.newUpdateForm.dirty); 
     if (this.newUpdateForm.valid) {
       this.updatesDataService.add(this.newUpdateForm.value)
           .then(()=>this.newUpdate.emit());
       this.resetForm();
     }
      else {
        const form = this.newUpdateForm;
        for (let el in this.formErrors) {
          const control = form.controls[el];
          if (control && !control.valid) {
            this.formErrors[el] = true;
          }
        }
      }
  }
    
  private getProjectsList() {
      
     this.projectsDataService.getProjects()
         .then(projects => this.projectsOptions = projects.map((item) => {return {key: item.id, label: item.name}}));
  }
    
  private onValueChanged(data?: any) {
    
     if (!this.newUpdateForm) { return;};
                         
     const form = this.newUpdateForm;
     for (let el in this.formErrors) {
       
       this.formErrors[el] = '';
       const control = form.controls[el];
                                
       if (control && control.dirty && !control.valid) {
          this.formErrors[el] = true;
        }
      }
  }
      
  private resetForm(): void {
      
     this.newUpdateForm.reset();
      
     let el = document.getElementById('new-update-text'); //to be reworked
     el.style.height = '33px';
      
      
  }  
    
  private resize(event): void {
     let el = event.target;
     el.style.height = el.scrollHeight + 'px';          
  } 
      
  
  @Output() newUpdate: EventEmitter<any> = new EventEmitter();

}
