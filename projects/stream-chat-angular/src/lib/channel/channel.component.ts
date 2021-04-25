import { Component, ElementRef, HostListener, Input, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Channel, FormatMessageResponse } from 'stream-chat';
import { ChannelService } from '../channel.service';
import { ChatClientService } from '../chat-client.service';

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel?: Channel;
  @ViewChild('messagelist') el!: ElementRef;
  messages: FormatMessageResponse[] = [];

  private enableScrollToBottom = true;

  constructor(
    private cs: ChannelService,
    public viewContainerRef: ViewContainerRef,
    private chatClientService: ChatClientService
  ) { }

  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.init();
  }

  ngOnInit() {
    this.init();
  }

  init () {
    if (!this.channel) {
      return;
    }

    this.cs
      .init(this.channel)
      .then(this.getMessages);
  }

  getMessageAlignment = (message: FormatMessageResponse) => {
    const client = this.chatClientService.getClient();

    return client.user?.id === message.user?.id ? 'right' : 'left';
  }

  getMessages = () => {
    this.cs.getMessages()
      .subscribe(() => {
        if (!this.channel) {
          return;
        }
    
        this.messages = [...this.channel.state.messages];
      });
  }

  loadMore = () => {
    if (this.cs.hasMoreMessages) {
      this.cs.loadMoreMessages();
    }
  }
}
