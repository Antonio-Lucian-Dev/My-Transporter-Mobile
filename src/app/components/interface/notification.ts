import { User } from 'src/app/auth/interface/user';

export interface Notification {
  user: User;
  title: string;
  createdAt: string;
  isNew: boolean;
  isRead: boolean;
}
