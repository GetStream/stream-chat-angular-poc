import { Component, Input, OnInit } from '@angular/core';
import { StreamChat } from 'stream-chat';
import { ChatClientService } from '../chat-client.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})

export class ChatComponent implements OnInit {
  @Input() client: StreamChat | null = null;
  constructor(private chatClientService: ChatClientService) { }

  ngOnInit(): void {
    console.log('Logged in as user - ', this.client?.user)
    if (this.client) {
      this.chatClientService.setClient(this.client);
    }
  }
}
