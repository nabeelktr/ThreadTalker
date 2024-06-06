import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DiscussionServiceClient as _discussion_package_DiscussionServiceClient, DiscussionServiceDefinition as _discussion_package_DiscussionServiceDefinition } from './discussion_package/DiscussionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  discussion_package: {
    AddCommentRequest: MessageTypeDefinition
    Comment: MessageTypeDefinition
    CommentResponse: MessageTypeDefinition
    CreateDiscussionRequest: MessageTypeDefinition
    DeleteCommentRequest: MessageTypeDefinition
    DeleteDiscussionRequest: MessageTypeDefinition
    Discussion: MessageTypeDefinition
    DiscussionResponse: MessageTypeDefinition
    DiscussionService: SubtypeConstructor<typeof grpc.Client, _discussion_package_DiscussionServiceClient> & { service: _discussion_package_DiscussionServiceDefinition }
    Empty: MessageTypeDefinition
    GetListByTagsRequest: MessageTypeDefinition
    GetListByTextRequest: MessageTypeDefinition
    GetPostViewCountRequest: MessageTypeDefinition
    LikeCommentRequest: MessageTypeDefinition
    LikeCount: MessageTypeDefinition
    LikeDiscussionRequest: MessageTypeDefinition
    ListDiscussionsResponse: MessageTypeDefinition
    Response: MessageTypeDefinition
    UpdateCommentRequest: MessageTypeDefinition
    UpdateDiscussionRequest: MessageTypeDefinition
    UserLike: MessageTypeDefinition
    ViewCountResponse: MessageTypeDefinition
  }
}

