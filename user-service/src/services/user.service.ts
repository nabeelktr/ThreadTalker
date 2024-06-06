import { IUserService } from "../interfaces/iUserInterface";
import { IUserRepository } from "../interfaces/iUserRepository";
import "dotenv/config";
import { IUser } from "../model/schemas/user.schema";

export class UserService implements IUserService {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  followUser(followerId: string, followeeId: string): Promise<any> {
    return this.repository.followUser(followerId, followeeId);
  }
  unfollowUser(followerId: string, followeeId: string): Promise<any> {
    return this.repository.unfollowUser(followerId, followeeId);
  }

  deleteUser(userId: string): Promise<Object | unknown> {
    return this.repository.deleteUser(userId);
  }

  getUsers() {
    return this.repository.getUsers();
  }

  async updateUserInfo(id: string, username: string) {
    const user = await this.repository.findByIdAndUpdate(id, username);
    if (user) {
      return { message: "User info updated successfully" };
    } else {
      throw new Error("User not found");
    }
  }

  async userRegister(userData: IUser) {
    const isEmailExist = await this.repository.findOne(userData.email);
    const isMobileExist = await this.repository.findMobile(userData.mobile);
    if (isEmailExist) {
      throw new Error("Email Already Exists");
    } else if (isMobileExist) {
      throw new Error("Mobile Number Already Exists");
    } else {
      const user = await this.repository.register(userData);
      return user;
    }
  }

  async userLogin(email: string, password: string) {
    const user = await this.repository.findOne(email);
    if (!user) {
      throw new Error("Invalid email");
    }
    const isPassword = await user.comparePassword(password);
    if (!isPassword) {
      throw new Error("invalid password");
    }
    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();

    return { accessToken, refreshToken, message: "Login successfull" };
  }

  async getUser(id: string): Promise<IUser[] | any> {
    const user = await this.repository.findUser(id);
    return user;
  }
}
