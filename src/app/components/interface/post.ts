import { UserRole } from './userRole';

export interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  currentCity: string;
  userDto: {
    id: string;
    firstName: string;
    lastName: string;
    userRole: UserRole;
  };
}
