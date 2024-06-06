// Original file: src/modules/discussion/config/proto/discussion.proto

import type { UserLike as _discussion_package_UserLike, UserLike__Output as _discussion_package_UserLike__Output } from '../discussion_package/UserLike';

export interface LikeCount {
  'count'?: (number);
  'users'?: (_discussion_package_UserLike)[];
}

export interface LikeCount__Output {
  'count'?: (number);
  'users'?: (_discussion_package_UserLike__Output)[];
}
