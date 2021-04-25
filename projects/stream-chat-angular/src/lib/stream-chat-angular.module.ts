import { NgModule } from '@angular/core';
import { StreamChatAngularComponent } from './stream-chat-angular.component';
import { ChatComponent } from './chat/chat.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelPreviewComponent } from './channel-preview/channel-preview.component';
import { ChannelPreviewMessengerComponent } from './channel-preview/channel-preview-messenger/channel-preview-messenger.component';
import { MessageListComponent } from './message-list/message-list.component';
import { CustomComponentHostDirective } from './custom-component-host.directive';
import { MessageSimpleComponent } from './message/message-simple/message-simple.component';
import { MessageTextComponent } from './message/message-text/message-text.component';
import { MessageAvatarComponent } from './message/message-avatar/message-avatar.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { AttachmentComponent } from './attachment/attachment.component';
import { GalleryComponent } from './attachment/gallery/gallery.component';
import { SandwichIconComponent } from './icons/sandwich-icon/sandwich-icon.component';
import { MessageOptionsComponent } from './message/message-options/message-options.component';
import { ReactionIconComponent } from './icons/reaction-icon/reaction-icon.component';
import { ReactionPickerDirective } from './message/reaction-picker/reaction-picker.directive';
import { ReactionPickerComponent } from './message/reaction-picker/reaction-picker.component';
import { DateSeparatorComponent } from './message-list/date-separator/date-separator.component';
import { ChannelComponent } from './channel/channel.component';
import { MessageTimestampComponent } from './message/message-timestamp/message-timestamp.component';
import { LoveReactionIconComponent } from './icons/love-reaction-icon/love-reaction-icon.component';
import { ThumbsUpReactionIconComponent } from './icons/thumbs-up-reaction-icon/thumbs-up-reaction-icon.component';
import { ThumbsDownReactionIconComponent } from './icons/thumbs-down-reaction-icon/thumbs-down-reaction-icon.component';
import { LolReactionIconComponent } from './icons/lol-reaction-icon/lol-reaction-icon.component';
import { WutReactionIconComponent } from './icons/wut-reaction-icon/wut-reaction-icon.component';
import { ReactionPickerItemComponent } from './message/reaction-picker-item/reaction-picker-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    StreamChatAngularComponent,
    ChatComponent,
    ChannelListComponent,
    ChannelPreviewComponent,
    ChannelPreviewMessengerComponent,
    MessageListComponent,
    CustomComponentHostDirective,
    MessageSimpleComponent,
    MessageTextComponent,
    MessageAvatarComponent,
    MessageInputComponent,
    AttachmentComponent,
    GalleryComponent,
    SandwichIconComponent,
    MessageOptionsComponent,
    ReactionIconComponent,
    ReactionPickerDirective,
    ReactionPickerComponent,
    DateSeparatorComponent,
    ChannelComponent,
    MessageTimestampComponent,
    LoveReactionIconComponent,
    ThumbsUpReactionIconComponent,
    ThumbsDownReactionIconComponent,
    LolReactionIconComponent,
    WutReactionIconComponent,
    ReactionPickerItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MentionModule,
    BrowserAnimationsModule
  ],
  exports: [
    StreamChatAngularComponent,
    ChatComponent,
    ChannelComponent,
    ChannelListComponent,
    MessageListComponent,
    MessageInputComponent
  ]
})
export class StreamChatAngularModule { }
