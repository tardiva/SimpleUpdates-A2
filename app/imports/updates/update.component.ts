import { Component, Input, OnInit } from '@angular/core';
import { Project} from '../projects/project';

@Component({
  selector: 'update-item',
  templateUrl: 'app/imports/updates/update.component.html',
})

export class UpdateComponent {
       
constructor() {
         
    }   

@Input() project: any;

}