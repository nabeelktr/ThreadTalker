// Original file: src/modules/discussion/config/proto/discussion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddCommentRequest as _discussion_package_AddCommentRequest, AddCommentRequest__Output as _discussion_package_AddCommentRequest__Output } from '../discussion_package/AddCommentRequest';
import type { CommentResponse as _discussion_package_CommentResponse, CommentResponse__Output as _discussion_package_CommentResponse__Output } from '../discussion_package/CommentResponse';
import type { CreateDiscussionRequest as _discussion_package_CreateDiscussionRequest, CreateDiscussionRequest__Output as _discussion_package_CreateDiscussionRequest__Output } from '../discussion_package/CreateDiscussionRequest';
import type { DeleteCommentRequest as _discussion_package_DeleteCommentRequest, DeleteCommentRequest__Output as _discussion_package_DeleteCommentRequest__Output } from '../discussion_package/DeleteCommentRequest';
import type { DeleteDiscussionRequest as _discussion_package_DeleteDiscussionRequest, DeleteDiscussionRequest__Output as _discussion_package_DeleteDiscussionRequest__Output } from '../discussion_package/DeleteDiscussionRequest';
import type { DiscussionResponse as _discussion_package_DiscussionResponse, DiscussionResponse__Output as _discussion_package_DiscussionResponse__Output } from '../discussion_package/DiscussionResponse';
import type { GetListByTagsRequest as _discussion_package_GetListByTagsRequest, GetListByTagsRequest__Output as _discussion_package_GetListByTagsRequest__Output } from '../discussion_package/GetListByTagsRequest';
import type { GetListByTextRequest as _discussion_package_GetListByTextRequest, GetListByTextRequest__Output as _discussion_package_GetListByTextRequest__Output } from '../discussion_package/GetListByTextRequest';
import type { GetPostViewCountRequest as _discussion_package_GetPostViewCountRequest, GetPostViewCountRequest__Output as _discussion_package_GetPostViewCountRequest__Output } from '../discussion_package/GetPostViewCountRequest';
import type { LikeCommentRequest as _discussion_package_LikeCommentRequest, LikeCommentRequest__Output as _discussion_package_LikeCommentRequest__Output } from '../discussion_package/LikeCommentRequest';
import type { LikeDiscussionRequest as _discussion_package_LikeDiscussionRequest, LikeDiscussionRequest__Output as _discussion_package_LikeDiscussionRequest__Output } from '../discussion_package/LikeDiscussionRequest';
import type { ListDiscussionsResponse as _discussion_package_ListDiscussionsResponse, ListDiscussionsResponse__Output as _discussion_package_ListDiscussionsResponse__Output } from '../discussion_package/ListDiscussionsResponse';
import type { Response as _discussion_package_Response, Response__Output as _discussion_package_Response__Output } from '../discussion_package/Response';
import type { UpdateCommentRequest as _discussion_package_UpdateCommentRequest, UpdateCommentRequest__Output as _discussion_package_UpdateCommentRequest__Output } from '../discussion_package/UpdateCommentRequest';
import type { UpdateDiscussionRequest as _discussion_package_UpdateDiscussionRequest, UpdateDiscussionRequest__Output as _discussion_package_UpdateDiscussionRequest__Output } from '../discussion_package/UpdateDiscussionRequest';
import type { ViewCountResponse as _discussion_package_ViewCountResponse, ViewCountResponse__Output as _discussion_package_ViewCountResponse__Output } from '../discussion_package/ViewCountResponse';

export interface DiscussionServiceClient extends grpc.Client {
  AddComment(argument: _discussion_package_AddCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  AddComment(argument: _discussion_package_AddCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  AddComment(argument: _discussion_package_AddCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  AddComment(argument: _discussion_package_AddCommentRequest, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  addComment(argument: _discussion_package_AddCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  addComment(argument: _discussion_package_AddCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  addComment(argument: _discussion_package_AddCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  addComment(argument: _discussion_package_AddCommentRequest, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  
  CreateDiscussion(argument: _discussion_package_CreateDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  CreateDiscussion(argument: _discussion_package_CreateDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  CreateDiscussion(argument: _discussion_package_CreateDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  CreateDiscussion(argument: _discussion_package_CreateDiscussionRequest, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  createDiscussion(argument: _discussion_package_CreateDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  createDiscussion(argument: _discussion_package_CreateDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  createDiscussion(argument: _discussion_package_CreateDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  createDiscussion(argument: _discussion_package_CreateDiscussionRequest, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteComment(argument: _discussion_package_DeleteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _discussion_package_DeleteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _discussion_package_DeleteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _discussion_package_DeleteCommentRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _discussion_package_DeleteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _discussion_package_DeleteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _discussion_package_DeleteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _discussion_package_DeleteCommentRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  DeleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  deleteDiscussion(argument: _discussion_package_DeleteDiscussionRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  
  GetListByTags(argument: _discussion_package_GetListByTagsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByTags(argument: _discussion_package_GetListByTagsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByTags(argument: _discussion_package_GetListByTagsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByTags(argument: _discussion_package_GetListByTagsRequest, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByTags(argument: _discussion_package_GetListByTagsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByTags(argument: _discussion_package_GetListByTagsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByTags(argument: _discussion_package_GetListByTagsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByTags(argument: _discussion_package_GetListByTagsRequest, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetListByText(argument: _discussion_package_GetListByTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByText(argument: _discussion_package_GetListByTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByText(argument: _discussion_package_GetListByTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  GetListByText(argument: _discussion_package_GetListByTextRequest, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByText(argument: _discussion_package_GetListByTextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByText(argument: _discussion_package_GetListByTextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByText(argument: _discussion_package_GetListByTextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  getListByText(argument: _discussion_package_GetListByTextRequest, callback: grpc.requestCallback<_discussion_package_ListDiscussionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetPostViewCount(argument: _discussion_package_GetPostViewCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  GetPostViewCount(argument: _discussion_package_GetPostViewCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  GetPostViewCount(argument: _discussion_package_GetPostViewCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  GetPostViewCount(argument: _discussion_package_GetPostViewCountRequest, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  getPostViewCount(argument: _discussion_package_GetPostViewCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  getPostViewCount(argument: _discussion_package_GetPostViewCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  getPostViewCount(argument: _discussion_package_GetPostViewCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  getPostViewCount(argument: _discussion_package_GetPostViewCountRequest, callback: grpc.requestCallback<_discussion_package_ViewCountResponse__Output>): grpc.ClientUnaryCall;
  
  LikeComment(argument: _discussion_package_LikeCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeComment(argument: _discussion_package_LikeCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeComment(argument: _discussion_package_LikeCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeComment(argument: _discussion_package_LikeCommentRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeComment(argument: _discussion_package_LikeCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeComment(argument: _discussion_package_LikeCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeComment(argument: _discussion_package_LikeCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeComment(argument: _discussion_package_LikeCommentRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  
  LikeDiscussion(argument: _discussion_package_LikeDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeDiscussion(argument: _discussion_package_LikeDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeDiscussion(argument: _discussion_package_LikeDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  LikeDiscussion(argument: _discussion_package_LikeDiscussionRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeDiscussion(argument: _discussion_package_LikeDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeDiscussion(argument: _discussion_package_LikeDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeDiscussion(argument: _discussion_package_LikeDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  likeDiscussion(argument: _discussion_package_LikeDiscussionRequest, callback: grpc.requestCallback<_discussion_package_Response__Output>): grpc.ClientUnaryCall;
  
  UpdateComment(argument: _discussion_package_UpdateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _discussion_package_UpdateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _discussion_package_UpdateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _discussion_package_UpdateCommentRequest, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _discussion_package_UpdateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _discussion_package_UpdateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _discussion_package_UpdateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _discussion_package_UpdateCommentRequest, callback: grpc.requestCallback<_discussion_package_CommentResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  UpdateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  UpdateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  UpdateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  updateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  updateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  updateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  updateDiscussion(argument: _discussion_package_UpdateDiscussionRequest, callback: grpc.requestCallback<_discussion_package_DiscussionResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DiscussionServiceHandlers extends grpc.UntypedServiceImplementation {
  AddComment: grpc.handleUnaryCall<_discussion_package_AddCommentRequest__Output, _discussion_package_CommentResponse>;
  
  CreateDiscussion: grpc.handleUnaryCall<_discussion_package_CreateDiscussionRequest__Output, _discussion_package_DiscussionResponse>;
  
  DeleteComment: grpc.handleUnaryCall<_discussion_package_DeleteCommentRequest__Output, _discussion_package_Response>;
  
  DeleteDiscussion: grpc.handleUnaryCall<_discussion_package_DeleteDiscussionRequest__Output, _discussion_package_Response>;
  
  GetListByTags: grpc.handleUnaryCall<_discussion_package_GetListByTagsRequest__Output, _discussion_package_ListDiscussionsResponse>;
  
  GetListByText: grpc.handleUnaryCall<_discussion_package_GetListByTextRequest__Output, _discussion_package_ListDiscussionsResponse>;
  
  GetPostViewCount: grpc.handleUnaryCall<_discussion_package_GetPostViewCountRequest__Output, _discussion_package_ViewCountResponse>;
  
  LikeComment: grpc.handleUnaryCall<_discussion_package_LikeCommentRequest__Output, _discussion_package_Response>;
  
  LikeDiscussion: grpc.handleUnaryCall<_discussion_package_LikeDiscussionRequest__Output, _discussion_package_Response>;
  
  UpdateComment: grpc.handleUnaryCall<_discussion_package_UpdateCommentRequest__Output, _discussion_package_CommentResponse>;
  
  UpdateDiscussion: grpc.handleUnaryCall<_discussion_package_UpdateDiscussionRequest__Output, _discussion_package_DiscussionResponse>;
  
}

export interface DiscussionServiceDefinition extends grpc.ServiceDefinition {
  AddComment: MethodDefinition<_discussion_package_AddCommentRequest, _discussion_package_CommentResponse, _discussion_package_AddCommentRequest__Output, _discussion_package_CommentResponse__Output>
  CreateDiscussion: MethodDefinition<_discussion_package_CreateDiscussionRequest, _discussion_package_DiscussionResponse, _discussion_package_CreateDiscussionRequest__Output, _discussion_package_DiscussionResponse__Output>
  DeleteComment: MethodDefinition<_discussion_package_DeleteCommentRequest, _discussion_package_Response, _discussion_package_DeleteCommentRequest__Output, _discussion_package_Response__Output>
  DeleteDiscussion: MethodDefinition<_discussion_package_DeleteDiscussionRequest, _discussion_package_Response, _discussion_package_DeleteDiscussionRequest__Output, _discussion_package_Response__Output>
  GetListByTags: MethodDefinition<_discussion_package_GetListByTagsRequest, _discussion_package_ListDiscussionsResponse, _discussion_package_GetListByTagsRequest__Output, _discussion_package_ListDiscussionsResponse__Output>
  GetListByText: MethodDefinition<_discussion_package_GetListByTextRequest, _discussion_package_ListDiscussionsResponse, _discussion_package_GetListByTextRequest__Output, _discussion_package_ListDiscussionsResponse__Output>
  GetPostViewCount: MethodDefinition<_discussion_package_GetPostViewCountRequest, _discussion_package_ViewCountResponse, _discussion_package_GetPostViewCountRequest__Output, _discussion_package_ViewCountResponse__Output>
  LikeComment: MethodDefinition<_discussion_package_LikeCommentRequest, _discussion_package_Response, _discussion_package_LikeCommentRequest__Output, _discussion_package_Response__Output>
  LikeDiscussion: MethodDefinition<_discussion_package_LikeDiscussionRequest, _discussion_package_Response, _discussion_package_LikeDiscussionRequest__Output, _discussion_package_Response__Output>
  UpdateComment: MethodDefinition<_discussion_package_UpdateCommentRequest, _discussion_package_CommentResponse, _discussion_package_UpdateCommentRequest__Output, _discussion_package_CommentResponse__Output>
  UpdateDiscussion: MethodDefinition<_discussion_package_UpdateDiscussionRequest, _discussion_package_DiscussionResponse, _discussion_package_UpdateDiscussionRequest__Output, _discussion_package_DiscussionResponse__Output>
}
