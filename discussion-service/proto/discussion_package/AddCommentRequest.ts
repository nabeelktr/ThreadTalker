// Original file: src/protos/discussion.proto

import type { Comment as _discussion_package_Comment, Comment__Output as _discussion_package_Comment__Output } from '../discussion_package/Comment';

export interface AddCommentRequest {
  'discussionId'?: (string);
  'comment'?: (_discussion_package_Comment | null);
}

export interface AddCommentRequest__Output {
  'discussionId'?: (string);
  'comment'?: (_discussion_package_Comment__Output);
}
