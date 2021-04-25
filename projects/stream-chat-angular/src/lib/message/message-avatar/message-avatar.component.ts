import { Component, Input, OnInit } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';

@Component({
  selector: 'message-avatar',
  templateUrl: './message-avatar.component.html',
  styleUrls: ['./message-avatar.component.scss']
})
export class MessageAvatarComponent implements OnInit {
  @Input() message!: FormatMessageResponse;
  @Input() showImage = true;

  avatarUrl: string = 'https://picsum.photos/seed/30/100/100';
  constructor() { }

  ngOnInit(): void {
    if (this.message.user) {
      this.avatarUrl = this.message.user?.image as string;
    }
  }
}
