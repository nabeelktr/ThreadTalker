import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader" 
import "dotenv/config"
import { connectDB } from "./config/mongodb/db"
import {DiscussionServiceHandlers} from '../proto/discussion_package/DiscussionService';
import { ProtoGrpcType } from "../proto/discussion";
import { DiscussionRepository } from "./repository/discussionRepository"
import { DiscussionService } from "./services/discussion.service"
import { DiscussionController } from "./controllers/discussionController"




connectDB();

const packageDef = protoLoader.loadSync(path.resolve(__dirname, './protos/discussion.proto'))
const grpcObject = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const discussionpackage = grpcObject.discussion_package

//dependency injection
const repository = new DiscussionRepository()
const service = new DiscussionService(repository);
export const controller = new DiscussionController(service)

const server = new grpc.Server()

const grpcServer = () => {
    server.bindAsync(`0.0.0.0:50053`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if(err){
                console.log(err);
                return
            }
            console.log('grpc-discussion server started on port ', port);
        }
    )
}

server.addService(discussionpackage.DiscussionService.service, {
    CreateDiscussion: controller.createDiscussion.bind(controller),
    UpdateDiscussion: controller.updateDiscussion.bind(controller),
    DeleteDiscussion: controller.deleteDiscussion.bind(controller),
    GetListByTags: controller.getListByTags.bind(controller),
    GetListByText: controller.getListByText.bind(controller),
    AddComment: controller.addComment.bind(controller),
    UpdateComment: controller.updateComment.bind(controller),
    DeleteComment: controller.deleteComment.bind(controller),
    LikeDiscussion: controller.likeDiscussion.bind(controller),
    GetPostViewCount: controller.getViewCount.bind(controller),
} as DiscussionServiceHandlers)

grpcServer();