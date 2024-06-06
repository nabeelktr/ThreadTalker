// Original file: src/protos/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _user_package_CreateUserRequest, CreateUserRequest__Output as _user_package_CreateUserRequest__Output } from '../user_package/CreateUserRequest';
import type { DeleteUserRequest as _user_package_DeleteUserRequest, DeleteUserRequest__Output as _user_package_DeleteUserRequest__Output } from '../user_package/DeleteUserRequest';
import type { Empty as _user_package_Empty, Empty__Output as _user_package_Empty__Output } from '../user_package/Empty';
import type { FollowResponse as _user_package_FollowResponse, FollowResponse__Output as _user_package_FollowResponse__Output } from '../user_package/FollowResponse';
import type { ListUsersResponse as _user_package_ListUsersResponse, ListUsersResponse__Output as _user_package_ListUsersResponse__Output } from '../user_package/ListUsersResponse';
import type { SearchUserRequest as _user_package_SearchUserRequest, SearchUserRequest__Output as _user_package_SearchUserRequest__Output } from '../user_package/SearchUserRequest';
import type { UnfollowResponse as _user_package_UnfollowResponse, UnfollowResponse__Output as _user_package_UnfollowResponse__Output } from '../user_package/UnfollowResponse';
import type { UpdateUserRequest as _user_package_UpdateUserRequest, UpdateUserRequest__Output as _user_package_UpdateUserRequest__Output } from '../user_package/UpdateUserRequest';
import type { UserIdRequest as _user_package_UserIdRequest, UserIdRequest__Output as _user_package_UserIdRequest__Output } from '../user_package/UserIdRequest';
import type { UserResponse as _user_package_UserResponse, UserResponse__Output as _user_package_UserResponse__Output } from '../user_package/UserResponse';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _user_package_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_package_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_package_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_package_CreateUserRequest, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_package_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_package_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_package_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_package_CreateUserRequest, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _user_package_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_package_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_package_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_package_DeleteUserRequest, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_package_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_package_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_package_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_package_DeleteUserRequest, callback: grpc.requestCallback<_user_package_Empty__Output>): grpc.ClientUnaryCall;
  
  FollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_package_UserIdRequest, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_package_UserIdRequest, callback: grpc.requestCallback<_user_package_FollowResponse__Output>): grpc.ClientUnaryCall;
  
  ListUsers(argument: _user_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_package_Empty, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_package_Empty, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  
  SearchUser(argument: _user_package_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  SearchUser(argument: _user_package_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  SearchUser(argument: _user_package_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  SearchUser(argument: _user_package_SearchUserRequest, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  searchUser(argument: _user_package_SearchUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  searchUser(argument: _user_package_SearchUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  searchUser(argument: _user_package_SearchUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  searchUser(argument: _user_package_SearchUserRequest, callback: grpc.requestCallback<_user_package_ListUsersResponse__Output>): grpc.ClientUnaryCall;
  
  UnfollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  UnfollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  UnfollowUser(argument: _user_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  UnfollowUser(argument: _user_package_UserIdRequest, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  unfollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  unfollowUser(argument: _user_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  unfollowUser(argument: _user_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  unfollowUser(argument: _user_package_UserIdRequest, callback: grpc.requestCallback<_user_package_UnfollowResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _user_package_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_package_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_package_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_package_UpdateUserRequest, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_package_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_package_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_package_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_package_UpdateUserRequest, callback: grpc.requestCallback<_user_package_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_user_package_CreateUserRequest__Output, _user_package_UserResponse>;
  
  DeleteUser: grpc.handleUnaryCall<_user_package_DeleteUserRequest__Output, _user_package_Empty>;
  
  FollowUser: grpc.handleUnaryCall<_user_package_UserIdRequest__Output, _user_package_FollowResponse>;
  
  ListUsers: grpc.handleUnaryCall<_user_package_Empty__Output, _user_package_ListUsersResponse>;
  
  SearchUser: grpc.handleUnaryCall<_user_package_SearchUserRequest__Output, _user_package_ListUsersResponse>;
  
  UnfollowUser: grpc.handleUnaryCall<_user_package_UserIdRequest__Output, _user_package_UnfollowResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_user_package_UpdateUserRequest__Output, _user_package_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_user_package_CreateUserRequest, _user_package_UserResponse, _user_package_CreateUserRequest__Output, _user_package_UserResponse__Output>
  DeleteUser: MethodDefinition<_user_package_DeleteUserRequest, _user_package_Empty, _user_package_DeleteUserRequest__Output, _user_package_Empty__Output>
  FollowUser: MethodDefinition<_user_package_UserIdRequest, _user_package_FollowResponse, _user_package_UserIdRequest__Output, _user_package_FollowResponse__Output>
  ListUsers: MethodDefinition<_user_package_Empty, _user_package_ListUsersResponse, _user_package_Empty__Output, _user_package_ListUsersResponse__Output>
  SearchUser: MethodDefinition<_user_package_SearchUserRequest, _user_package_ListUsersResponse, _user_package_SearchUserRequest__Output, _user_package_ListUsersResponse__Output>
  UnfollowUser: MethodDefinition<_user_package_UserIdRequest, _user_package_UnfollowResponse, _user_package_UserIdRequest__Output, _user_package_UnfollowResponse__Output>
  UpdateUser: MethodDefinition<_user_package_UpdateUserRequest, _user_package_UserResponse, _user_package_UpdateUserRequest__Output, _user_package_UserResponse__Output>
}
