// Original file: src/protos/discussion.proto

import type { Comment as _discussion_package_Comment, Comment__Output as _discussion_package_Comment__Output } from '../discussion_package/Comment';

export interface UpdateCommentRequest {
  'id'?: (string);
  'comment'?: (_discussion_package_Comment | null);
}

export interface UpdateCommentRequest__Output {
  'id'?: (string);
  'comment'?: (_discussion_package_Comment__Output);
}
