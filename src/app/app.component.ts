import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ServiceService } from './services/service.service';
import { HostDirective } from './host.directive'
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HostDirective, {static: true})
  childRef: any = HostDirective;
  component: any = [HelloComponent, HiComponent]

  title = 'prakash-website';
  name: String = "Prkash"
  countss: Number | undefined
  display = false;
  
  constructor(private dataService: ServiceService, public factRes: ComponentFactoryResolver) {
   this.countss = dataService.count
  }

  ngOnInit() {
    console.log("Component Initialized!")
  }

  onsubmit(user: any, userDiv: any) {
    console.log(userDiv, "User", user)
  }

  loadComponent() {

  }

}
