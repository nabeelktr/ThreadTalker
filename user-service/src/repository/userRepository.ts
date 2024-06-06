import { DBConnectionError } from "@nabeelktr/error-handler";
import { IUserRepository } from "../interfaces/iUserRepository";
import UserModel, { IUser } from "../model/schemas/user.schema";

export class UserRepository implements IUserRepository {

  async followUser(followerId: string, followeeId: string): Promise<any> {
    try {
      await UserModel.findByIdAndUpdate(
        followerId,
        { $push: { followings: followeeId } },
        { new: true }
      );

      await UserModel.findByIdAndUpdate(
        followeeId,
        { $push: { followers: followerId } },
        { new: true }
      );
      return { success: true, message: "follow user successfull" };
    } catch {
      throw new DBConnectionError();
    }
  }
  async unfollowUser(followerId: string, followeeId: string): Promise<any> {
     try {
      await UserModel.findByIdAndUpdate(
        followerId,
        { $pull: { followings: followeeId } },
        { new: true }
      );
      await UserModel.findByIdAndUpdate(
        followeeId,
        { $pull: { followers: followerId } },
        { new: true }
      );
      return { success: true, message: "unfollow user successful" };
    } catch {
      throw new DBConnectionError();
    }
  }

  async getUsers(): Promise<IUser[] | null> {
    try {
      const user = await UserModel.find().select("-password");
      return user;
    } catch {
      throw new DBConnectionError();
    }
  }

  async findMobile(mobile: string): Promise<IUser | null> {
    try {
      const user = await UserModel.findOne({ mobile: mobile });
      return user;
    } catch {
      throw new DBConnectionError();
    }
  }

  async register(userData: IUser): Promise<Object | null> {
    try {
      await UserModel.create(userData);
      return { message: "Registration Successfull" };
    } catch {
      throw new DBConnectionError();
    }
  }

  async findOne(email: string): Promise<IUser | null> {
    try {
      const user = await UserModel.findOne({ email: email });
      return user;
    } catch {
      throw new DBConnectionError();
    }
  }

  async findByIdAndUpdate(id: string, name: string): Promise<IUser | null> {
    try {
      const user = await UserModel.findByIdAndUpdate(id, { username: name });
      return user;
    } catch {
      throw new DBConnectionError();
    }
  }

  async findUser(username: string): Promise<IUser[] | null> {
    try {
      const user = await UserModel.find({
        username: { $regex: username, $options: "i" },
      }).select("-password");
      return user;
    } catch {
      throw new DBConnectionError();
    }
  }

  async deleteUser(userId: string): Promise<Object | unknown> {
    try {
      const user = await UserModel.findByIdAndDelete(userId);
      return { message: "User deleted successfully" };
    } catch {
      throw new DBConnectionError();
    }
  }
}
