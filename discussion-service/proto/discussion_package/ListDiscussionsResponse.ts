// Original file: src/protos/discussion.proto

import type { Discussion as _discussion_package_Discussion, Discussion__Output as _discussion_package_Discussion__Output } from '../discussion_package/Discussion';

export interface ListDiscussionsResponse {
  'discussions'?: (_discussion_package_Discussion)[];
  'likecount'?: (string);
}

export interface ListDiscussionsResponse__Output {
  'discussions'?: (_discussion_package_Discussion__Output)[];
  'likecount'?: (string);
}
