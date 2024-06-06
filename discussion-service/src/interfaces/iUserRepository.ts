import { Discussion } from "../model/discussion.entities";

export interface IDiscussionRepository {
  deleteComment(commentId: string | undefined): unknown;
  findComment(commentId: string | undefined): unknown;
  addComment(discussionId: string | undefined, comment: import("../../proto/discussion_package/Comment").Comment__Output | undefined): unknown;
  createDiscussion(discussion:Discussion, userId: string): Promise<Discussion | any>;
  findOne(id:string): Promise<Discussion | any>;
  deleteDiscussion(id:string, userId:string):  Promise<Object | any>;
  getListByTags(tags:string): Promise<Object | any>;
  getListByText(text:string): Promise<Object | any>;
}
