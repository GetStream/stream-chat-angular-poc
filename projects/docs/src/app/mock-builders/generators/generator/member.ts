import { UserResponse } from 'stream-chat';
import { generateUser } from './user';

type GenerateMemberOptions = {
  user?: Partial<UserResponse>
};

export const generateMember = (options: GenerateMemberOptions = {}) => {
  const user = (options && options.user) || generateUser();
  return {
    invited: false,
    is_moderator: false,
    role: 'member',
    user,
    user_id: user.id,
    ...options,
  };
};
