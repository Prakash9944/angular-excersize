import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prakash-website';
  name: String = "Prkash"
  countss: Number | undefined
  constructor(private dataService: ServiceService) {
   this.countss = dataService.count
  }
}
