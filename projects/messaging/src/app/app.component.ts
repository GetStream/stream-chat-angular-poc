import { Component, OnInit, Type } from '@angular/core';
import { ChatInteractionService } from 'stream-chat-angular';
import {
  Channel,
  ChannelFilters,
  ChannelOptions,
  ChannelSort,
  StreamChat,
} from 'stream-chat';
import { MyChannelPreviewComponent } from './my-channel-preview/my-channel-preview.component';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Messaging';
  client: StreamChat | null = null;
  chatLoaded: boolean = false;
  chatCustomComponents: Record<string, Type<any>> = {};
  activeChannel?: Channel;
  filters!: ChannelFilters;
  options: ChannelOptions = {
    limit: 30,
    message_limit: 30,
  };
  sort: ChannelSort = {
    last_message_at: -1,
  };

  constructor(private es: ChatInteractionService) {}
  async ngOnInit(): Promise<void> {
    this.client = StreamChat.getInstance(environment.stream.apiKey);
    await this.client.connectUser(
      {
        id: environment.stream.userId,
      },
      environment.stream.userToken
    );
    this.chatLoaded = true;
    this.chatCustomComponents = {};
    this.filters = { type: 'messaging', members: { $in: [USER_ID] } };
  }

  onChannelSelect(channel: Channel) {
    this.activeChannel = channel;
  }
}
