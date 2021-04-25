import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageResponse } from 'stream-chat';

@Component({
  selector: 'message-options',
  templateUrl: './message-options.component.html',
  styleUrls: ['./message-options.component.scss']
})
export class MessageOptionsComponent implements OnInit {
  @Input() message!: MessageResponse;
  @Output() onPressReactionPicker = new EventEmitter();

  reactionPickerOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleReactionPicker = () => {
    this.reactionPickerOpen = !this.reactionPickerOpen;
  }
}
