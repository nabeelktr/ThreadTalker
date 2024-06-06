// Original file: src/modules/discussion/config/proto/discussion.proto

import type { Comment as _discussion_package_Comment, Comment__Output as _discussion_package_Comment__Output } from '../discussion_package/Comment';

export interface Comment {
  'id'?: (string);
  'discussionId'?: (string);
  'userId'?: (string);
  'text'?: (string);
  'likeCount'?: (number);
  'replies'?: (_discussion_package_Comment)[];
}

export interface Comment__Output {
  'id'?: (string);
  'discussionId'?: (string);
  'userId'?: (string);
  'text'?: (string);
  'likeCount'?: (number);
  'replies'?: (_discussion_package_Comment__Output)[];
}
