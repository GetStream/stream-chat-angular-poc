import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { FormatMessageResponse, MessageResponse } from 'stream-chat';
import { MessageAlignment } from '../types';
import {ChatInteractionService} from '../interaction-event.service';
@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})

export class MessageListComponent implements OnInit, OnChanges {
  @Input() messages!: FormatMessageResponse[];
  @Input() getMessageAlignment = (message: FormatMessageResponse): MessageAlignment => 'left';

  @Output() onScroll = new EventEmitter();
  @Output() onTopReached = new EventEmitter();
  
  @ViewChild('messagelist') el!: ElementRef;
  overlayActive = false;

  private enableScrollToBottom = true;

  async handleScroll(e: any) {
    const elem = this.el.nativeElement
    let atBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight < 100;
    if (atBottom) {
        this.enableScrollToBottom = true;
    } else {
        this.enableScrollToBottom = false;
    }

    if (e.target.scrollTop <= 300) {
      this.onTopReached.emit();
    }
  }

  constructor(
    public viewContainerRef: ViewContainerRef,
    private chatInteractionService: ChatInteractionService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const prevMessages = changes.messages.previousValue;
    const currMessages = changes.messages.currentValue;

    if ((!prevMessages || prevMessages.length === 0) && currMessages.length > 0) {
      this.scrollToBottom();
    }

    if (
      prevMessages &&
      currMessages &&
      prevMessages.length > 0 &&
      currMessages.length > 0 &&
      currMessages.length > prevMessages.length &&
      prevMessages[0].id === currMessages[0].id &&
      this.enableScrollToBottom
    ) {
      this.scrollToBottom();
    }
  }

  ngOnInit() {}

  scrollToBottom = () => {
    setTimeout(() => {
      this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
    })
  }

  getgroupPosition = (i: number) => {
  // const messagegroupPosition: { [key: string]: GroupType[] } = {};

    const previousMessage = this.messages[i - 1];
    const message = this.messages[i];
    const nextMessage = this.messages[i + 1];
    let groupPosition = 'single';

    const userId = message?.user?.id || null;

    const isTopMessage =
      !previousMessage ||
      previousMessage.type === 'system' ||
      userId !== previousMessage?.user?.id ||
      previousMessage.type === 'error' ||
      !!previousMessage.deleted_at ||
      (message.created_at.getTime() - previousMessage.created_at.getTime()) > 10000

    const isBottomMessage =
      !nextMessage ||
      nextMessage.type === 'system' ||
      userId !== nextMessage?.user?.id ||
      nextMessage.type === 'error' ||
      !!nextMessage.deleted_at ||
      (nextMessage.created_at.getTime() - message.created_at.getTime()) > 10000;

    /**
     * Add group styles key for top message
     */
    if (isTopMessage) {
      groupPosition = 'top';
    }

    /**
     * Add group styles key for bottom message
     */
    if (isBottomMessage) {
      /**
       * If the bottom message is also the top, or deleted, or an error,
       * add the key for single message instead of bottom
       */
      if (isTopMessage || message.deleted_at || message.type === 'error') {
        groupPosition = 'single';
      } else {
        groupPosition = 'bottom';
      }
    }

    /**
     * Add the key for all non top or bottom messages, if the message is
     * deleted or an error add the key for single otherwise middle
     */
    if (!isTopMessage && !isBottomMessage) {
      if (message.deleted_at || message.type === 'error') {
        groupPosition = 'single';
      } else {
        groupPosition = 'middle';
      }
    }
    return groupPosition;
  };

}
