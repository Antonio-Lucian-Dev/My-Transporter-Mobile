import { Follower } from './follower';

export interface UserAdminProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  userRole: string;
  followers: Follower[];
}

