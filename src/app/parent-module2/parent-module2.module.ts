import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2ComponentComponent } from './module2-component/module2-component.component';



@NgModule({
  declarations: [
    Module2ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Module2ComponentComponent
  ]
})
export class ParentModule2Module { }
