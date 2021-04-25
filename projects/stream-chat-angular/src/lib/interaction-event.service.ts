import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Channel } from 'stream-chat';

@Injectable({
  providedIn: 'root'
})
export class ChatInteractionService {
  private onChannelSelectedEvent = new BehaviorSubject<Channel | null>(null);
  private onReactionPickerToggledEvent = new BehaviorSubject<boolean>(false);

  constructor() { }

  setSelectedChannel(channel: Channel){
     this.onChannelSelectedEvent.next(channel)
  }

  getSelectedChannelObservable () {
     return this.onChannelSelectedEvent.asObservable();
  }
  
  reactionPickerToggled (opened: boolean) {
    console.log('next tick')
    this.onReactionPickerToggledEvent.next(opened);
  }

  getReactionPickerToggledObservable () {
    return this.onReactionPickerToggledEvent;
  }
}
