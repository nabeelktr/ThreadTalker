import { DBConnectionError } from "@nabeelktr/error-handler";
import { IDiscussionRepository } from "../interfaces/iUserRepository";
import { Discussion } from "../model/discussion.entities";
import DiscussionModel from "../model/schemas/discussion.schema";
import { Comment__Output } from "../../proto/discussion_package/Comment";
import CommentModel from "../model/schemas/comment.schema";


export class DiscussionRepository implements IDiscussionRepository {

  async deleteComment(commentId: string | undefined): Promise<unknown> {
    try {
      const comment = await CommentModel.findByIdAndDelete(commentId)
      return 
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  async findComment(commentId: string | undefined): Promise<any> {
    try {
      const comment = await CommentModel.findById(commentId)
      return comment;
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  async addComment(discussionId: string | undefined, comment: Comment__Output | any): Promise<any> {
    try {
      const savedComment: any = await new CommentModel(comment).save();
      const discussion = await DiscussionModel.findById(discussionId);
      
      if (!discussion) {
        throw new Error('Discussion not found');
      }
      discussion.comments.push(savedComment._id);
      await discussion.save();

      return comment;
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  async getListByText(text: string): Promise<any> {
    try {
      const post = await DiscussionModel.find({ text: { $regex: new RegExp(text, 'i') }}).populate("comments");
      return post;
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  async getListByTags(tag: string): Promise<any> {
    try {
      const post = await DiscussionModel.find({ hashtags: tag}).populate("comments");;
      return post;
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  async deleteDiscussion(id: string, userId: string): Promise<Object | any> {
    try {
      const post = await DiscussionModel.findById(id);
      return post;
    } catch (err) {
      throw new DBConnectionError();
    }
  }

  findOne(id: string): Promise<any> {
     try {
      return  DiscussionModel.findById(id);
    } catch {
      throw new DBConnectionError();
    }
  }

  async createDiscussion(discussion: Discussion, userId: string): Promise<Discussion | any> {
    discussion.user_id = userId;
    
    try {
      const post = await DiscussionModel.create(discussion);
      return post;
    } catch {
      throw new DBConnectionError();
    }
  }

  
}
