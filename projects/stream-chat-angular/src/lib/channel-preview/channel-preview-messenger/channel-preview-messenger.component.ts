import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChannelUtilsService } from '../../channel-utils.service';
import { ChatClientService } from '../../chat-client.service';
import { ChatInteractionService } from '../../interaction-event.service';

@Component({
  selector: 'lib-channel-preview-messenger',
  templateUrl: './channel-preview-messenger.component.html',
  styleUrls: ['./channel-preview-messenger.component.scss']
})
export class ChannelPreviewMessengerComponent implements OnInit, OnChanges {
  @Input() channel!: Channel;
  @Output() channelChangedEvent = new EventEmitter<Channel>();

  @Input() displayTitle: string = '';
  @Input() displayImage: string = 'https://picsum.photos/seed/30/100/100';
  @Input() displayLastMessage: string = '';

  constructor(
    private chatClientService: ChatClientService,
    private channelUtilsService: ChannelUtilsService,
    private ChatInteractionService: ChatInteractionService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed --- ')
  }

  ngOnInit(): void {
    const client = this.chatClientService.getClient();
    if (!this.channel || !client?.user) return;
  }

  onClick(channel: Channel) {
    this.ChatInteractionService.setSelectedChannel(channel);
  }
}
