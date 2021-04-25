import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormatMessageResponse } from 'stream-chat';
import { MessageAlignment } from '../../types';

@Component({
  selector: 'message-simple',
  templateUrl: './message-simple.component.html',
  styleUrls: ["./message-simple.component.scss"],
})
export class MessageSimpleComponent implements OnInit {
  @Input() message!: FormatMessageResponse;
  @Input() alignment: MessageAlignment = 'left';
  @Input() groupPosition = 'single';

  textComponentProps: Record<string, any> = {};
  avatarComponentProps: Record<string, any> = {};
  attachmentComponentProps: Record<string, any> = {};
  messageOptionsComponentProps: Record<string, any> = {};
  messageOptionsActive: boolean = false;
  messageUIProps : Record<string, any> = {};

  reactionPickerActive = false;

  constructor() { }

  @HostListener('mouseenter')
  showMessageOptions = () => {
    this.messageOptionsActive = true;
  }

  @HostListener('mouseleave')
  hideMessageOptions = () => {
    this.messageOptionsActive = false;
  }

  toggleReactionPicker = () => {
    console.log('showReactionPicker')
    this.reactionPickerActive = !this.reactionPickerActive;
  }

  ngOnInit(): void {
    if (!this.message) {
      return;
    }
    this.messageUIProps = { message: this.message };
  }


}
