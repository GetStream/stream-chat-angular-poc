import { Component, OnInit } from '@angular/core';
import { MessageListComponent } from 'stream-chat-angular';
import { FormatMessageResponse, UserResponse } from 'stream-chat';
import { generateMessage } from '../mock-builders/generators/generator/message';
import { generateUser } from '../mock-builders/generators/generator/user';
import { getRandomInt, generateMessageText } from '../mock-builders/utils';
import { generateImageAttachment } from '../mock-builders/generators/generator/attachment';

@Component({
  selector: 'app-message-list-docs',
  templateUrl: './message-list-docs.component.html',
  styleUrls: ['./message-list-docs.component.css']
})
export class MessageListDocsComponent implements OnInit {
  messages: FormatMessageResponse[] = []
  currentUser: UserResponse = generateUser();
  constructor() { }

  ngOnInit(): void {
    const user1 = generateUser();
    const user2 = generateUser();
    const messages: FormatMessageResponse[] = [];

    for (let i = 0; i < 10; i++) {
      const user = generateUser();
      messages.push(generateMessage({
        text: generateMessageText(),
        user: this.currentUser,
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
        attachments: [
          generateImageAttachment(),
          generateImageAttachment(),
          generateImageAttachment(),
          generateImageAttachment(),
        ]
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
      }));
      messages.push(generateMessage({
        text: generateMessageText(),
        user,
      }));
    }

    this.messages = [...messages]
  }

  getMessageAlignment = (message: FormatMessageResponse) => {
    return message.user?.id === this.currentUser.id ? 'right' : 'left';
  }
}
