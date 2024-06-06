// Original file: src/modules/discussion/config/proto/discussion.proto

import type { Comment as _discussion_package_Comment, Comment__Output as _discussion_package_Comment__Output } from '../discussion_package/Comment';
import type { LikeCount as _discussion_package_LikeCount, LikeCount__Output as _discussion_package_LikeCount__Output } from '../discussion_package/LikeCount';

export interface Discussion {
  'id'?: (string);
  'text'?: (string);
  'image'?: (string);
  'hashtags'?: (string)[];
  'createdOn'?: (string);
  'viewCount'?: (number);
  'comments'?: (_discussion_package_Comment)[];
  'likeCount'?: (_discussion_package_LikeCount | null);
}

export interface Discussion__Output {
  'id'?: (string);
  'text'?: (string);
  'image'?: (string);
  'hashtags'?: (string)[];
  'createdOn'?: (string);
  'viewCount'?: (number);
  'comments'?: (_discussion_package_Comment__Output)[];
  'likeCount'?: (_discussion_package_LikeCount__Output);
}
