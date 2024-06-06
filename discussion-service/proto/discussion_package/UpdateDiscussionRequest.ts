// Original file: src/protos/discussion.proto

import type { Discussion as _discussion_package_Discussion, Discussion__Output as _discussion_package_Discussion__Output } from '../discussion_package/Discussion';

export interface UpdateDiscussionRequest {
  'id'?: (string);
  'discussion'?: (_discussion_package_Discussion | null);
}

export interface UpdateDiscussionRequest__Output {
  'id'?: (string);
  'discussion'?: (_discussion_package_Discussion__Output);
}
