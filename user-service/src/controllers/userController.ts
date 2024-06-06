import { UserHandlers } from "../../proto/user_package/User";
import { IUserService } from "../interfaces/iUserInterface";
import { User } from "../model/user.entities";

export class UserController {
  private service: IUserService;

  constructor(service: IUserService) {
    this.service = service;
  }

  onRegister: UserHandlers["CreateUser"] = async (call, callback) => {
    try {
      const request = call.request as User
      const response = await this.service.userRegister(request);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  };

  onLogin: UserHandlers["Login"] = async (call, callback) => {
    try {
      const { email, password } = call.request as {
        email: string;
        password: string;
      };
      const response = await this.service.userLogin(email, password);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  };

  updateUser: UserHandlers["UpdateUser"] = async (call, callback) => {
    try {
      const { userId, username } = call.request as { userId: string; username: string};
      const response = await this.service.updateUserInfo(userId, username);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  };

  deleteUser: UserHandlers["DeleteUser"] = async (call, callback) => {
    try {
      const { id: userId} = call.request as { id: string;};
      const response = await this.service.deleteUser(userId);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  };

  getUser: UserHandlers["GetUser"] = async (call, callback) => {
    try {
      const response: any = await this.service.getUser(
        call.request.username as string
      );
      if (response) {
        callback(null, {users: response});
      }
    } catch (e: any) {
      callback(e, null);
    }
  };

  listUsers: UserHandlers["GetUser"] = async (call, callback) => {
    try {
      const response = await this.service.getUsers();
      if (response) {
        callback(null, {users: response});
      }
    } catch (e: any) {
      callback(e, null);
    }
  };

  followUser: UserHandlers["FollowUser"] = async (call, callback) => {
    try {
      const {followerId, followeeId} = call.request as {followerId: string, followeeId: string}
      const response = await this.service.followUser(followerId, followeeId);
      if (response) {
        callback(null, response);
      }
    } catch (e: any) {
      callback(e, null);
    }
  };

  unfollowUser: UserHandlers["UnfollowUser"] = async (call, callback) => {
    try {
      const {followerId, followeeId} = call.request as {followerId: string, followeeId: string}
      const response = await this.service.unfollowUser(followerId, followeeId);
      if (response) {
        callback(null, response);
      }
    } catch (e: any) {
      callback(e, null);
    }
  };

}
