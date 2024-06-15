import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Output() customEvent = new EventEmitter<string>();
    @Output() thanks: EventEmitter<string> = new EventEmitter<string>();
    @Input() chocolateCount: any;

    emitEvent() {
        console.log("Child")
        this.customEvent.emit("Custom event emitted from child!");
    }

    sayThanks() {
        this.thanks.emit('Thank you from child');
    }

    doSomething(){
        window.alert("Event called from parent!")
    }
}
