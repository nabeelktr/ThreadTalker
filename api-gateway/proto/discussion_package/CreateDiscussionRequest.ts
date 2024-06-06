// Original file: src/modules/discussion/config/proto/discussion.proto

import type { Discussion as _discussion_package_Discussion, Discussion__Output as _discussion_package_Discussion__Output } from '../discussion_package/Discussion';

export interface CreateDiscussionRequest {
  'discussion'?: (_discussion_package_Discussion | null);
  'userId'?: (string);
}

export interface CreateDiscussionRequest__Output {
  'discussion'?: (_discussion_package_Discussion__Output);
  'userId'?: (string);
}
