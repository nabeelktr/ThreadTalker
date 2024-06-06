import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";
import { IUser } from "../model/schemas/user.schema";

interface IActivationToken {
  token: string;
  activationCode: string;
}
export const CreateActivationToken = (user: IUser): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.JWT_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );

  return { token, activationCode };
};
