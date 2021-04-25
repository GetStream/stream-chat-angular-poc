import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { WutReactionIconComponent } from '../../icons/wut-reaction-icon/wut-reaction-icon.component';

@Component({
  selector: 'reaction-picker-item',
  templateUrl: './reaction-picker-item.component.html',
  styleUrls: ['./reaction-picker-item.component.css'],
})
export class ReactionPickerItemComponent implements OnInit {
  /** @todo: fix the typing on icon */
  @Input() reaction!: {
    id: string;
    icon: Type<WutReactionIconComponent>;
  };
  private componentRef!: ComponentRef<any>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    const componentFactory = this
      .componentFactoryResolver
      .resolveComponentFactory<WutReactionIconComponent>(this.reaction.icon);

    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent<any>(componentFactory);
  }
}
