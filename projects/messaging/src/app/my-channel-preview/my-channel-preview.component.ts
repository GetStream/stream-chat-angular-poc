import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'stream-chat';
import { ChatInteractionService } from 'stream-chat-angular';

@Component({
  selector: 'app-my-channel-preview',
  templateUrl: './my-channel-preview.component.html',
  styleUrls: ['./my-channel-preview.component.scss']
})
export class MyChannelPreviewComponent implements OnInit {
  @Input() displayTitle: string = '';
  @Input() channel!: Channel;
  constructor(private es: ChatInteractionService) { }

  ngOnInit(): void {
  }

  onClicked() {
    this.es.setSelectedChannel(this.channel);
  }
}
