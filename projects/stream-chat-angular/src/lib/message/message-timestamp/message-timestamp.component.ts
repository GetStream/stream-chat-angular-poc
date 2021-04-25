import { Component, Input, OnInit } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';

@Component({
  selector: 'message-timestamp',
  templateUrl: './message-timestamp.component.html',
  styleUrls: ['./message-timestamp.component.scss']
})
export class MessageTimestampComponent implements OnInit {
  @Input() message!: FormatMessageResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
