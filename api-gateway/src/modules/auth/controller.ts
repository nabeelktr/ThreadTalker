import { NextFunction, Request, Response } from "express";
import { AuthClient } from "./config/grpc-client/auth.client";
import { CustomRequest } from "../../interfaces/IRequest";
import AsyncHandler from "express-async-handler";
import { generateTokenOptions } from "../../utils/generateTokenOptions";
import { StatusCode } from "../../interfaces/enums";

export const isValidated = AsyncHandler(
  (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken;
    AuthClient.IsAuthenticated({ token }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.Unauthorized)
          .json({ success: false, message: err.details });
      } else {
        req.userId = result?.userId;
        next();
      }
    });
  }
);

export const refreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.refreshToken;
  if (token) {
    AuthClient.RefreshToken({ token }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.NotAcceptable)
          .json({ message: "Invalid refresh token" });
      } else {
        const options = generateTokenOptions();
        res.cookie(
          "accessToken",
          result?.accessToken,
          options.accessTokenOptions
        );
        res.cookie(
          "refreshToken",
          result?.refreshToken,
          options.refreshTokenOptions
        );
        res
          .status(StatusCode.Created)
          .json({ success: true, message: "new token generated successfully" });
      }
    });
  } else {
    res.status(StatusCode.Unauthorized).json({ message: "Token is missing" });
  }
};
