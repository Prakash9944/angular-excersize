import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1ComponentComponent } from './module1-component/module1-component.component';
import { Module1Component2Component } from './module1-component2/module1-component2.component';
import { ParentModule2Module } from '../parent-module2/parent-module2.module';



@NgModule({
  declarations: [
    Module1ComponentComponent,
    Module1Component2Component
  ],
  imports: [
    CommonModule,
    ParentModule2Module
  ],
  exports: [
    Module1ComponentComponent, 
    ParentModule2Module
  ]
})
export class ParentModule1Module { }
