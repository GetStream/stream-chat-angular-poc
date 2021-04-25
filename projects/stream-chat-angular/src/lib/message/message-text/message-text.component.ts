import { Component, Input, OnInit } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';

@Component({
  selector: 'message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.scss']
})
export class MessageTextComponent implements OnInit {
  @Input() message!: FormatMessageResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
