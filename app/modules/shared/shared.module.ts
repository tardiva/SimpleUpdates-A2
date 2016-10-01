import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownComponent }     from './components/dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DropdownComponent, ClickOutsideDirective ],
  exports:      [ CommonModule, ReactiveFormsModule, DropdownComponent, ClickOutsideDirective ]
})
export class SharedModule { }