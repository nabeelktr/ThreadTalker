import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserClient as _user_package_UserClient, UserDefinition as _user_package_UserDefinition } from './user_package/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user_package: {
    CreateUserRequest: MessageTypeDefinition
    DeleteUserRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    FollowResponse: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    ListUsersResponse: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    SearchUserRequest: MessageTypeDefinition
    UpdateUserRequest: MessageTypeDefinition
    User: SubtypeConstructor<typeof grpc.Client, _user_package_UserClient> & { service: _user_package_UserDefinition }
    UserIdRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    Userr: MessageTypeDefinition
  }
}

