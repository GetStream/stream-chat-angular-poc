'use strict'
import { Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChatClientService } from '../chat-client.service';
import { ChannelUtilsService } from '../channel-utils.service';
import { CustomComponentHostDirective } from '../custom-component-host.directive';

@Component({
  selector: 'channel-preview',
  templateUrl: './channel-preview.component.html',
  styleUrls: ['./channel-preview.component.scss']
})

export class ChannelPreviewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() channel!: Channel;
  @Input() onSelect?: (channel: Channel) => void;
  @Output() clicked = new EventEmitter<Channel>();
  @ViewChild(CustomComponentHostDirective, {static: true}) channelPreviewHost!: CustomComponentHostDirective;

  private messageNewListener!: {
    unsubscribe: () => void;
  };

  forwardedProps!: Record<string, any>;
  constructor(
    private chatClientService: ChatClientService,
    private channelUtilsService: ChannelUtilsService
  ) { }

  ngOnDestroy(): void {
    this.messageNewListener?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const client = this.chatClientService.getClient();
    if (!client?.user || !changes.channel) {
      return;
    }

    this.loadPreviewComponent();
  }

  ngOnInit(): void {
    this.messageNewListener = this.channel.on('message.new', () => {
      this.loadPreviewComponent();
    })
  }

  loadPreviewComponent() {
    const client = this.chatClientService.getClient();
    if (!client?.user) {
      return;
    }

    this.forwardedProps = {
      channel: this.channel,
      /**
       * @todo Update default image
       */
      displayImage: this.channelUtilsService
        .getDisplayImage(this.channel, client.user) as string || 'https://picsum.photos/seed/30/100/100',
      displayTitle: this.channelUtilsService
        .getDisplayTitle(this.channel) || '',
      displayLastMessage: this.channelUtilsService
        .getLatestMessagePreview(this.channel),
     }
  }

  onClick = (channel: Channel) => {
    console.log('channel >>', channel)
    this.clicked.emit(channel);
  }
}
