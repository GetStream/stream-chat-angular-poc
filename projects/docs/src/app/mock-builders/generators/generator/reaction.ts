import { ReactionResponse } from 'stream-chat';
import { generateUser } from './user';

type GenerateReactionOptions = Partial<ReactionResponse>;

export const generateReaction = (options: GenerateReactionOptions = {}) => {
  const user = options.user || generateUser();
  return {
    created_at: new Date(),
    type: 'love',
    user,
    user_id: user.id,
    ...options,
  };
};
