import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'
import { ObservableComponent } from './observable/observable.component'

const routes: Routes = [
    {
        path: 'parent', component: ParentComponent
    },
    {
        path: 'child', component: ChildComponent
    },
    {
        path: 'observable', component: ObservableComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
