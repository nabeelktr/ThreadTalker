import "dotenv/config";
import { IDiscussionService } from "../interfaces/iDiscussionInterface";
import { IDiscussionRepository } from "../interfaces/iUserRepository";
import { Discussion } from "../model/discussion.entities";
import { Comment__Output } from "../../proto/discussion_package/Comment";

export class DiscussionService implements IDiscussionService {
  private repository: IDiscussionRepository;

  constructor(repository: IDiscussionRepository) {
    this.repository = repository;
  }

  async getViewCount(discussionId: string): Promise<any> {
    const post = await this.repository.findOne(discussionId)
    return post.view_count
  }

  async likeDiscussion(
    discussionId: string,
    userId: string | undefined
  ): Promise<Object | any> {
    const discussion = await this.repository.findOne(discussionId);
    
    if (!discussion) {
      throw new Error("Discussion not found");
    }
    const alreadyLiked = discussion.like_count.users.some(
      (user: any) => user.userId === userId
    );
    if (alreadyLiked) {
      return { message: "User already liked" };
    }
    discussion.like_count.count++;
    discussion.like_count.users.push({ userId });
    await discussion.save();

    return { message: "Added like successfully" };
  }

  deleteComment(commentId: string | undefined): unknown {
    return this.repository.deleteComment(commentId);
  }

  async updateComment(
    commentId: string | undefined,
    comment: Comment__Output | undefined
  ): Promise<any> {
    const isComment: any = await this.repository.findComment(commentId);
    if (isComment?.userId !== comment?.userId) {
      throw new Error("user has no permission to update this comment");
    }
    Object.assign(isComment, comment);
    await isComment.save();
    return isComment;
  }

  addComment(
    discussionId: string | undefined,
    comment: Comment__Output | undefined
  ): unknown {
    return this.repository.addComment(discussionId, comment);
  }

  getListByText(text: string): Promise<any> {
    return this.repository.getListByText(text);
  }

  getListByTags(tags: string): Promise<any> {
    return this.repository.getListByTags(tags);
  }

  async deleteDiscussion(id: string, userId: string): Promise<any> {
    const existingDiscussion = await this.repository.deleteDiscussion(
      id,
      userId
    );
    if (!existingDiscussion) {
      throw new Error("Discussion not found ");
    }
    if (existingDiscussion.user_id === userId) {
      await existingDiscussion.deleteOne();
      return { message: "discussion deleted successfully" };
    } else {
      throw new Error("user not authorized for this post");
    }
  }

  async updateDiscussion(userId: string, discussion: Discussion): Promise<any> {
    let existingDiscussion = await this.repository.findOne(discussion.id);
    if (!existingDiscussion) throw new Error("discussion not found");
    if (existingDiscussion.user_id === userId) {
      Object.assign(existingDiscussion, discussion);
      const updatedDiscussion = await existingDiscussion.save();
      return updatedDiscussion;
    } else {
      throw new Error("user not authorized for this post");
    }
  }

  createDiscussion(
    discussion: Discussion,
    userId: string
  ): Promise<Discussion | any> {
    return this.repository.createDiscussion(discussion, userId);
  }
}
