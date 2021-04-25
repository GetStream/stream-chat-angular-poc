import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MessageResponse } from 'stream-chat';
import { ReactionPickerComponent } from './reaction-picker.component';

@Directive({
  selector: '[reactionPicker]'
})

export class ReactionPickerDirective {
  @Input() message!: MessageResponse;
  @Input() set open(isOpen: boolean) {
    console.log('Opened - ', this.open)
    if (isOpen) {
      const componentFactory = this
        .componentFactoryResolver
        .resolveComponentFactory(ReactionPickerComponent);

      const viewContainerRef = this.viewContainerRef;
      viewContainerRef.clear();

      this.componentRef = viewContainerRef.createComponent<any>(componentFactory, 0);
      this.componentRef.instance.message = this.message;
    } else {
      const viewContainerRef = this.viewContainerRef;
      viewContainerRef.clear();
    }
  }

  private componentRef!: ComponentRef<any>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    ) { }
}
