import { IUser } from "../model/schemas/user.schema";

export interface IUserRepository {
  register(userData: IUser): Promise<Object | null>;
  findOne(email: string): Promise<IUser | null>;
  findMobile(mobile: string): Promise<IUser | null>;
  findUser(username: string): Promise<IUser[] | null>;
  findByIdAndUpdate(id: string, name: string): Promise<IUser | null>;
  getUsers(): Promise<IUser[] | null>;
  deleteUser(userId:string): Promise<Object | unknown>;
  followUser(followerId: string, followeeId: string): Promise<Object | any>;
  unfollowUser(followerId: string, followeeId: string): Promise<Object | any>;
}
