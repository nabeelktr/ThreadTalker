import { Discussion } from "../model/discussion.entities";

export interface IDiscussionService {
  getViewCount(discussionId: string | undefined): Promise<any>;
  likeDiscussion(discussionId: string | undefined, userId: string | undefined): Promise<Object>;
  deleteComment(commentId: string | undefined): unknown;
  updateComment(commentId: string | undefined, comment: import("../../proto/discussion_package/Comment").Comment__Output | undefined): unknown;
  addComment(discussionId: string | undefined, comment: import("../../proto/discussion_package/Comment").Comment__Output | undefined): unknown;
  createDiscussion(discussion:Discussion, userId: string): Promise<Object | any>;
  updateDiscussion(userId: string, discussion:Discussion): Promise<Object | any>;
  deleteDiscussion(id:string, userId:string):  Promise<Object | any>;
  getListByTags(tags:string): Promise<Object | any>;
  getListByText(text:string): Promise<Object | any>;
}
