export interface User {
    username: string;
    email: string;
    mobile: string;
    password?: string;
    followings?: string[];
    followers?: string[];
  }