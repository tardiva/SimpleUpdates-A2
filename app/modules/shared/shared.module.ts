import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownComponent }     from './components/dropdown.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DropdownComponent ],
  exports:      [ CommonModule, ReactiveFormsModule, DropdownComponent ]
})
export class SharedModule { }