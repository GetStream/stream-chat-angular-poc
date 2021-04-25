import { Injectable, Type } from '@angular/core';
import { AttachmentComponent } from './attachment/attachment.component';
import { GalleryComponent } from './attachment/gallery/gallery.component';
import { ChannelPreviewMessengerComponent } from './channel-preview/channel-preview-messenger/channel-preview-messenger.component';
import { DateSeparatorComponent } from './message-list/date-separator/date-separator.component';
import { MessageAvatarComponent } from './message/message-avatar/message-avatar.component';
import { MessageOptionsComponent } from './message/message-options/message-options.component';
import { MessageSimpleComponent } from './message/message-simple/message-simple.component';
import { MessageTextComponent } from './message/message-text/message-text.component';
import { MessageTimestampComponent } from './message/message-timestamp/message-timestamp.component';
import { ReactionPickerComponent } from './message/reaction-picker/reaction-picker.component';


export type CustomComponents = Record<string, Type<any>>;

const defaultComponents = {
  'channel-preview': ChannelPreviewMessengerComponent,
  'message-simple': MessageSimpleComponent,
  'message-text': MessageTextComponent,
  'message-avatar': MessageAvatarComponent,
  'attachment': AttachmentComponent,
  'gallery': GalleryComponent,
  'message-options': MessageOptionsComponent,
  'date-separator': DateSeparatorComponent,
  'message-timestamp': MessageTimestampComponent,
  'reaction-picker': ReactionPickerComponent
}

@Injectable({
  providedIn: 'root'
})
export class CustomComponentsService {
  customComponents: CustomComponents = {};
  constructor() {
    this.customComponents = defaultComponents;
  }

  setComponents(components: CustomComponents) {
    this.customComponents = {
      ...defaultComponents,
      ...components
    };
  }

  getComponents() {
    return this.customComponents;
  }

  getComponent(key: string) {
    const component = this.customComponents[key];

    if (component) {
      return this.customComponents[key];
    }

    throw new Error(`Please define a component ${key} in CustomComponentService`)
  }
}
