import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { ServiceService } from './services/service.service';


import {ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservableComponent } from './observable/observable.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { HostDirective } from './host.directive';
import { ShowDirective } from './show.directive'


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ParentComponent,
    ChildComponent,
    ObservableComponent,
    HelloComponent,
    HiComponent,
    HostDirective,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule1Module,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent, HiComponent]
})
export class AppModule { }
