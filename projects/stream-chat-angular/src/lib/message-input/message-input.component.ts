import { Component, HostListener, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  text: string = '';
  mentionConfig = {
    mentions: [
        {
            items: [ "Noah", "Liam", "Mason", "Jacob"],
            triggerChar: '@',
            dropUp: true
        },
        {
            items: [ "giphy", "Ban User", "Block user"],
            triggerChar: '/',
            dropUp: true
        }
    ],
}
  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    e.stopPropagation();
    console.log('sending message: ', this.text)
    this.channelService.sendMessage({
      text: this.text,
    });
    this.text = '';
  }
}
