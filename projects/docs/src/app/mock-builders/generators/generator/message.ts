import { FormatMessageResponse, MessageResponse } from 'stream-chat';
import { generateRandomId } from '../../utils';
import { generateUser } from './user';

type GenerateMessageOptions = {
  timestamp?: Date;
} & Partial<FormatMessageResponse>;

export const generateMessage = (options: GenerateMessageOptions = {}) => {
  const timestamp =
    options.timestamp ||
    new Date(new Date().getTime() - Math.floor(Math.random() * 100000));

  return {
    attachments: [],
    created_at: timestamp,
    html: '<p>regular</p>',
    id: generateRandomId(),
    text: generateRandomId(),
    type: 'regular',
    updated_at: timestamp,
    pinned_at: null,
    status: 'received',
    user: generateUser(),
    ...options,
  };
};

export const generateStaticMessage = (seed: string, options: GenerateMessageOptions, date: Date) =>
  generateMessage({
    created_at: date || '2020-04-27T13:39:49.331742Z',
    id: generateRandomId(seed),
    text: seed,
    updated_at: date || '2020-04-27T13:39:49.331742Z',
    ...options,
  });
