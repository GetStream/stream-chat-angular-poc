import { Component, Inject, Injectable, InjectionToken, Input, OnInit, Type } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { MessageResponse, Reaction } from 'stream-chat';
import { LolReactionIconComponent } from '../../icons/lol-reaction-icon/lol-reaction-icon.component';
import { LoveReactionIconComponent } from '../../icons/love-reaction-icon/love-reaction-icon.component';
import { ThumbsDownReactionIconComponent } from '../../icons/thumbs-down-reaction-icon/thumbs-down-reaction-icon.component';
import { ThumbsUpReactionIconComponent } from '../../icons/thumbs-up-reaction-icon/thumbs-up-reaction-icon.component';
import { WutReactionIconComponent } from '../../icons/wut-reaction-icon/wut-reaction-icon.component';

export const supportedReactions = [
  {
    icon: ThumbsUpReactionIconComponent,
    id: 'like',
  },
  {
    icon: LoveReactionIconComponent,
    id: 'love',
  },
  {
    icon: LolReactionIconComponent,
    id: 'haha',
  },
  {
    icon: WutReactionIconComponent,
    id: 'wow',
  },
  {
    icon: ThumbsDownReactionIconComponent,
    id: 'sad',
  },
];

export const SUPPORTED_REACTIONS = new InjectionToken<Array<Record<string, string>>>('supportedReactions');

@Component({
  selector: 'reaction-picker',
  templateUrl: './reaction-picker.component.html',
  styleUrls: ['./reaction-picker.component.scss'],
  providers: [
    {
      provide: SUPPORTED_REACTIONS,
      useValue: supportedReactions,
    }
  ],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class ReactionPickerComponent implements OnInit {
  @Input() set message(message: MessageResponse) {}
  @Input() reverseTailPosition = false;

  latestReactions: Reaction[] = [];
  supportedReactions: Array<{
    id: string;
    icon: Type<WutReactionIconComponent>,
  }> = [];

  constructor(@Inject(SUPPORTED_REACTIONS) supportedReactions: []) {
    this.supportedReactions = supportedReactions;
  }

  ngOnInit(): void {
    console.log(this.supportedReactions);
  }
}
