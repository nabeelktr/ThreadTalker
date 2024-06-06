import { IUser } from "../model/schemas/user.schema";
import { User } from "../model/user.entities";


export interface IUserService {
  userRegister(userData: User): Promise<IUser | any>;
  getUser(id: string): Promise<IUser[] | any>;
  userLogin(email: string, password: string): Promise<Object | any>;
  updateUserInfo(id: string, name: string): Promise<Object | any>;
  getUsers(): any;
  followUser(followerId: string, followeeId: string): Promise<Object | any>;
  unfollowUser(followerId: string, followeeId: string): Promise<Object | any>;
  deleteUser(userId:string): Promise<Object | any>;
}
