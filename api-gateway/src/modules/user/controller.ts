import { Request, Response, NextFunction } from "express";
import { UserClient } from "./config/grpc-client/user.client";
import { generateTokenOptions } from "../../utils/generateTokenOptions";
import { CustomRequest } from "../../interfaces/IRequest";
import { StatusCode } from "../../interfaces/enums";

export default class userController {
  register = (req: Request, res: Response) => {
    UserClient.CreateUser(req.body, (err, result) => {
      if (err) {
        res.status(StatusCode.BadRequest).json({ message: err.details });
      } else {
        res.status(StatusCode.Created).json(result);
      }
    });
  };

  login = async (req: Request, res: Response) => {
    UserClient.Login(req.body, (err, result) => {
      if (err) {
        res.status(StatusCode.BadRequest).json({ message: err.details });
      } else {
        const options = generateTokenOptions();
        res.cookie(
          "refreshToken",
          result?.refreshToken,
          options.refreshTokenOptions
        );
        res.cookie(
          "accessToken",
          result?.accessToken,
          options.accessTokenOptions
        );
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  updateUserInfo = (req: CustomRequest, res: Response) => {
    const { username } = req.body;
    const userId = req.userId;
    UserClient.UpdateUser({ userId, username }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Created).json(result);
      }
    });
  };

  deleteUser = (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    UserClient.DeleteUser({id: userId }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  getUser = (req: Request, res: Response) => {
    const {username} = req.body;
    UserClient.getUser({username}, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  listUsers = (req: Request, res: Response) => {
    UserClient.listUsers({}, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  followUser = (req: CustomRequest, res: Response) => {
    const {followeeId} = req.body;
    const followerId = req.userId;
    UserClient.FollowUser({followerId, followeeId}, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  unFollowUser = (req: CustomRequest, res: Response) => {
    const {followeeId} = req.body;
    const followerId = req.userId;
    UserClient.UnfollowUser({followerId, followeeId}, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

}
