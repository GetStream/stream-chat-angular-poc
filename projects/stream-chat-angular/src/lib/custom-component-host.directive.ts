import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { ChatClientService } from './chat-client.service';
import { CustomComponentsService } from './custom-components.service';

@Directive({
  selector: '[customComponentHost]'
})
export class CustomComponentHostDirective {
  private componentRef!: ComponentRef<any>;
  @Input() set props(props: Record<string, any>) {
    for (let p in props) {
      this.componentRef.instance[p] = props[p];
    }
  }
  @Input() set outputs(props: Record<string, any>) {
    for (let p in props) {
      this.componentRef.instance[p].subscribe(props[p]);
    }
  }
  @Input() set componentKey(key: string) {
    const component = this
      .customComponentsService
      .getComponent(key);

    const componentFactory = this
      .componentFactoryResolver
      .resolveComponentFactory(component);

    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<any>(componentFactory);
  }

  constructor(
    public viewContainerRef: ViewContainerRef,
    private customComponentsService: CustomComponentsService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }
}
