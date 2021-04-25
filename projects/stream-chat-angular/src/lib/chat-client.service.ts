import { Injectable } from '@angular/core';
import { StreamChat } from 'stream-chat';

@Injectable({
  providedIn: 'root'
})
export class ChatClientService {
  client!: StreamChat;
  constructor() {
  }

  
  getClient() {
    return this.client;
  }

  setClient(client: StreamChat) {
    this.client = client;
  }
}
