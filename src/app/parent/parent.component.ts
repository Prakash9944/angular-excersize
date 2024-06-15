import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    // @ViewChild('childRef') childComponent: ChildComponent;

    eventData: string  = '';
    chocolate = 0;
    thankYouText = '';

    handleEvent(event: string) {
        console.log('handleEvent', event)
        this.eventData = event;
    }

    sendToChild() {
        this.chocolate++;
    }

    sayThanks(event: any) {
        this.thankYouText = event;
    }

    // ngAfterViewInit() {
    //     this.childComponent.doSomething();
    // }
}
