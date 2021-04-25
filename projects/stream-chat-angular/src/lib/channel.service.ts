import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Channel, ChannelAPIResponse, FormatMessageResponse, Message, MessageResponse } from 'stream-chat';
import { ChatClientService } from './chat-client.service';

export const generateRandomId = (a = ''): string =>
  a
    ? /* eslint-disable no-bitwise */
      ((Number(a) ^ (Math.random() * 16)) >> (Number(a) / 4)).toString(16)
    : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, generateRandomId);

@Injectable({
  providedIn: 'root'
})

export class ChannelService {
  channel: Channel | null = null;
  private onStateUpdatedEvent = new ReplaySubject();
  private loadingMore: boolean = false;
  hasMoreMessages: boolean = true;

  constructor(
    private chatClientService: ChatClientService
  ) { }

  async init (channel: Channel) {
    if (!channel) {
      return;
    }

    if (!channel.initialized) {
      await this.channel?.watch();
    }
    this.channel = channel;
    this.hasMoreMessages = true;
    this.attachListeners();
  }

  attachListeners() {
    this.channel?.on((event) => {
      this.onStateUpdatedEvent.next();
    })
  }

  getMessages() {
    if (this.channel && this.channel.initialized) {
      this.onStateUpdatedEvent.next();
    }

    return this.onStateUpdatedEvent.asObservable();
  }

  async loadMoreMessages() {
    if (!this.channel) {
      return;
    }
    const oldestMessage = this.channel.state?.messages?.[0];
    if (this.loadingMore || oldestMessage?.status !== 'received') return;

    this.loadingMore = true;
    const oldestID = oldestMessage?.id;
    const perPage = 25;
    let queryResponse: ChannelAPIResponse;

    try {
      queryResponse = await this.channel.query({
        messages: { id_lt: oldestID, limit: perPage },
        watchers: { limit: perPage },
      });
    } catch (e) {
      console.warn('message pagination request failed with error', e);
      return;
    }
    this.loadingMore = false;

    this.hasMoreMessages = queryResponse.messages.length === perPage;

    this.onStateUpdatedEvent.next();
  }

  getStateObservable() {
    return this.onStateUpdatedEvent.asObservable();
  }

  createMesssagePreview(
    text?: string,
  ) {
    const client = this.chatClientService.getClient();

    // create a preview of the message
    const clientSideID = `${client.userID}-${generateRandomId()}`;

    return {
      __html: text,
      attachments: [],
      created_at: new Date(),
      html: text,
      id: clientSideID,
      reactions: [],
      status: 'sending',
      text,
      type: 'regular',
      user: client?.user,
    };
  }

  sendMessage(message: Message) {
    if (!this.channel) {
      return;
    }

    const messagePreview = this.createMesssagePreview(message.text);
    this.channel?.state.addMessageSorted(
      messagePreview as unknown as MessageResponse,
      true,
    );

    const messageData = {
      id: messagePreview.id,
      mentioned_users: [],
      text: messagePreview.text,
    } as Message;

    this.onStateUpdatedEvent.next();
    this.channel?.sendMessage(messageData)
  }
}
