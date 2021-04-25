import { Injectable } from '@angular/core';
import { Channel, FormatMessageResponse, UserResponse } from 'stream-chat';
import { ChatClientService } from './chat-client.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelUtilsService {

  constructor(
    private chatClientService: ChatClientService
  ) { }

  isMyMessage = (message: FormatMessageResponse) => {
    const client = this.chatClientService.getClient();

    return message.user?.id === client.user?.id;
  }

  getDisplayImage(
    channel: Channel,
    currentUser?: UserResponse,
  ) {
    let image = channel.data?.image;
    const members = Object.values(channel.state.members);
  
    if (!image && members.length === 2) {
      const otherMember = members.find((member) => member.user?.id !== currentUser?.id);
      if (otherMember?.user?.image) {
        image = otherMember.user.image;
      }
    }
  
    return image;
  };

  getLatestMessagePreview = (
    channel: Channel,
  ) => {
    const latestMessage = channel.state.messages[channel.state.messages.length - 1];

    const previewTextToRender = latestMessage?.text;

    if (!latestMessage) {
      return 'Nothing yet...';
    }

    if (latestMessage.deleted_at) {
      return 'Message deleted';
    }

    if (previewTextToRender) {
      return previewTextToRender;
    }

    if (latestMessage.command) {
      return `/${latestMessage.command}`;
    }

    if (latestMessage.attachments?.length) {
      return '🏙 Attachment...';
    }

    return 'Empty message...';
  };

  getDisplayTitle (
    channel: Channel,
    currentUser?: UserResponse,
  ) {
    let title = channel.data?.name;
    const members = Object.values(channel.state.members);

    if (!title && members.length >= 2) {
      const otherMembers = members.filter((member) => member.user?.id !== currentUser?.id);
      if (otherMembers) {
        title = otherMembers.map(m => m.user?.name).join(', ');
      }
    }

    return title;
  };
}
