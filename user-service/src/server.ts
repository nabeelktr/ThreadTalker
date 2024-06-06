import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import "dotenv/config";
import { connectDB } from "./config/mongodb/db";
import { UserHandlers } from "../proto/user_package/User";
import { ProtoGrpcType } from "../proto/user";
import { UserRepository } from "./repository/userRepository";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/userController";

connectDB();

const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, "./protos/user.proto")
);
const grpcObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const userpackage = grpcObject.user_package;

//dependency injection
const repository = new UserRepository();
const service = new UserService(repository);
export const controller = new UserController(service);

const server = new grpc.Server();

const grpcServer = () => {
  server.bindAsync(
    `0.0.0.0:50051`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("grpc-user server started on port ", port);
    }
  );
};

server.addService(userpackage.User.service, {
  CreateUser: controller.onRegister.bind(controller),
  Login: controller.onLogin.bind(controller),
  UpdateUser: controller.updateUser.bind(controller),
  DeleteUser: controller.deleteUser.bind(controller),
  GetUser: controller.getUser.bind(controller),
  ListUsers: controller.listUsers.bind(controller),
  FollowUser: controller.followUser.bind(controller),
  UnfollowUser: controller.unfollowUser.bind(controller),
} as UserHandlers);

grpcServer();
