import { DiscussionServiceHandlers } from "../../proto/discussion_package/DiscussionService";
import { IDiscussionService } from "../interfaces/iDiscussionInterface";
import { Discussion } from "../model/discussion.entities";

export class DiscussionController {
  private service: IDiscussionService;

  constructor(service: IDiscussionService) {
    this.service = service;
  }

  createDiscussion: DiscussionServiceHandlers["CreateDiscussion"] = async (
    call,
    callback
  ) => {
    try {
      const { discussion, userId } = call.request as {
        discussion: Discussion;
        userId: string;
      };
      const response = await this.service.createDiscussion(discussion, userId);
      callback(null, { discussion: response });
    } catch (e: any) {
      callback(e, null);
    }
  };

  updateDiscussion: DiscussionServiceHandlers["UpdateDiscussion"] = async (call, callback) => {
    try {
      const { discussion, id: userId } = call.request as { discussion: Discussion, id: string };
      const response = await this.service.updateDiscussion(userId, discussion);
      callback(null, { discussion: response });
    } catch (e: any) {
      callback(e, null);
    }
  };

  deleteDiscussion: DiscussionServiceHandlers["DeleteDiscussion"] = async (call, callback) => {
    try {
      const { id, userId } = call.request as { id: string, userId: string };
      const response = await this.service.deleteDiscussion(id, userId);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  };

  getListByTags: DiscussionServiceHandlers["GetListByTags"] = async (call, callback) => {
    try {
      const { tags } = call.request as { tags: string };
      const response = await this.service.getListByTags(tags);
      callback(null, { discussions: response });
    } catch (e: any) {
      callback(e, null);
    }
  };

  getListByText: DiscussionServiceHandlers["GetListByText"] = async (call, callback) => {
    try {
      const { searchText } = call.request as { searchText: string };
      const response = await this.service.getListByText(searchText);
      callback(null, { discussions: response , likecount: response[0].like_count?.count});
    } catch (e: any) {
      callback(e, null);
    }
  };

  addComment: DiscussionServiceHandlers["AddComment"] = async (call, callback) => {
    try {
      const { discussionId, comment } = call.request;
      const response = await this.service.addComment(discussionId, comment);
      callback(null, { message: "comment added"  });
    } catch (e: any) {
      callback(e, null);
    }
  }

  updateComment: DiscussionServiceHandlers["UpdateComment"] = async (call, callback) => {
    try {
      const { id: commentId, comment } = call.request;
      const response = await this.service.updateComment(commentId, comment);
      callback(null, { message: "updated successful"  });
    } catch (e: any) {
      callback(e, null);
    }
  }

  deleteComment: DiscussionServiceHandlers["DeleteComment"] = async (call, callback) => {
    try {
      const { id: commentId } = call.request;
      const response = await this.service.deleteComment(commentId);
      callback(null, { message: "deleted successful"  });
    } catch (e: any) {
      callback(e, null);
    }
  }
  
  likeDiscussion: DiscussionServiceHandlers["LikeDiscussion"] = async (call, callback) => {
    try {
      const { discussionId, userId } = call.request;
      const response = await this.service.likeDiscussion(discussionId, userId);
      callback(null, response);
    } catch (e: any) {
      callback(e, null);
    }
  }

  getViewCount: DiscussionServiceHandlers["GetPostViewCount"] = async (call, callback) => {
    try {
      const { discussionId } = call.request;
      const response = await this.service.getViewCount(discussionId);
      callback(null, {viewCount: response});
    } catch (e: any) {
      callback(e, null);
    }
  }
}
