import path from "path";
import "dotenv/config";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../../../../../proto/discussion";

const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, "../proto/discussion.proto")
);
const grpcObject = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const DiscussionClient = new grpcObject.discussion_package.DiscussionService(
  `0.0.0.0:50053`,
  grpc.credentials.createInsecure()
);

export { DiscussionClient };
