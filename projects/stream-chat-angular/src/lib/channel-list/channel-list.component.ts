import { Component, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { Channel, ChannelFilters, ChannelOptions, ChannelSort, StreamChat, UserResponse } from 'stream-chat';
import { ChatClientService } from '../chat-client.service';
import { CustomComponentsService } from '../custom-components.service';
import { ChatInteractionService } from '../interaction-event.service';
import { PaginatedChannelsService } from '../paginated-channels.service';

const DEFAULT_FILTERS = {};
const DEFAULT_OPTIONS = {};
const DEFAULT_SORT = {};

@Component({
  selector: 'channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
})

export class ChannelListComponent implements OnInit {
  @Input() client: StreamChat | null = null;
  @Input() filters: ChannelFilters = DEFAULT_FILTERS;
  @Input() sort: ChannelSort = DEFAULT_SORT;
  @Input() options: ChannelOptions = DEFAULT_OPTIONS;
  @Input() chatCustomComponents: Record<string, Type<any>> = {};
  @Output() selected = new EventEmitter<Channel>();
  
  channels: Channel[] = [];
  private selectedChannel?: Channel;

  constructor(
    private chatClientService: ChatClientService,
    private paginatedChannelsService: PaginatedChannelsService,
    private customComponentsService: CustomComponentsService,
    private ChatInteractionService: ChatInteractionService
  ) { }
  
  ngOnInit() {
    if (this.client) {
      this.chatClientService.setClient(this.client);
    }

    if (this.chatCustomComponents) {
      this
        .customComponentsService
        .setComponents(this.chatCustomComponents);
    }

    this.paginatedChannelsService
      .getChannels(
        this.filters,
        this.sort,
        this.options
      ).subscribe((channels) => {
        this.channels = [...channels];

        if (!this.selectedChannel) {
          this.selectedChannel = channels[0];
          this.selected.emit(channels[0]);
        }
      });
    
    this.ChatInteractionService
      .getSelectedChannelObservable()
      .subscribe(channel => {
        if (channel) {
          this.selected.emit(channel);
        }
      })
  }
}
