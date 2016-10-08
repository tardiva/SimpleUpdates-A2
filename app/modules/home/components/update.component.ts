import { Component, Input, OnInit } from '@angular/core';
import { Project} from '../../../models/project';

@Component({
  selector: 'update-item',
  templateUrl: 'app/modules/home/components/update.component.html',
})

export class UpdateComponent {
       
constructor() { }

@Input() project: Project[];

}