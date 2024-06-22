import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  @Input() set setShowValue(value : any) {

  } 
  constructor(public template: TemplateRef<any>, public container: ViewContainerRef) { }

}
