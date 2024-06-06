import { Request, Response, NextFunction } from "express";
import { DiscussionClient } from "./config/grpc-client/discussion.client";
import { CustomRequest } from "../../interfaces/IRequest";
import { StatusCode } from "../../interfaces/enums";

export default class discussionController {
  createDiscussion = (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    DiscussionClient.CreateDiscussion(
      { discussion: req.body, userId },
      (err, result) => {
        if (err) {
          res
            .status(StatusCode.BadRequest)
            .json({ success: false, message: err.details });
        } else {
          res.status(StatusCode.Accepted).json(result);
        }
      }
    );
  };

  updateDiscussion = (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    const discussionUpdates = req.body;

    DiscussionClient.UpdateDiscussion(
      { id: userId, discussion: discussionUpdates },
      (err, result) => {
        if (err) {
          res
            .status(StatusCode.BadRequest)
            .json({ success: false, message: err.details });
        } else {
          res.status(StatusCode.OK).json(result);
        }
      }
    );
  };

  deleteDiscussion = (req: CustomRequest, res: Response) => {
    const userId = req.userId;
    const discussionId = req.body.id;

    DiscussionClient.DeleteDiscussion(
      { id: discussionId, userId },
      (err, result) => {
        if (err) {
          res
            .status(StatusCode.BadRequest)
            .json({ success: false, message: err.details });
        } else {
          res.status(StatusCode.OK).json(result);
        }
      }
    );
  };

  getListByTags = (req: CustomRequest, res: Response) => {
    const tags = req.query.tags || "";

    DiscussionClient.GetListByTags({ tags: tags.toString() }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.OK).json(result);
      }
    });
  };

  getListByText = (req: CustomRequest, res: Response) => {
    const text = req.body.text;
    DiscussionClient.getListByText({ searchText: text }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.OK).json(result);
      }
    });
  };

  addComment = (req: CustomRequest, res: Response) => {
    const { discussionId, text } = req.body;
    const userId = req.userId;
    const comment = { text, userId };
    DiscussionClient.addComment({ discussionId, comment }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.OK).json(result);
      }
    });
  };

  updateComment = (req: CustomRequest, res: Response) => {
    const { commentId, text } = req.body;
    const userId = req.userId;

    if (!commentId || !text) {
      return res
        .status(StatusCode.BadRequest)
        .json({ success: false, message: "Comment ID and text are required" });
    }
    DiscussionClient.UpdateComment(
      { id: commentId, comment: { userId, text } },
      (err, result) => {
        if (err) {
          res
            .status(StatusCode.BadRequest)
            .json({ success: false, message: err.details });
        } else {
          res.status(StatusCode.Accepted).json(result);
        }
      }
    );
  };

  deleteComment = (req: CustomRequest, res: Response) => {
    const { commentId } = req.body;
    DiscussionClient.DeleteComment({ id: commentId }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  likeDiscussion = (req: CustomRequest, res: Response) => {
    const { discussionId } = req.body;
    const userId = req.userId
    DiscussionClient.likeDiscussion({ discussionId, userId }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };

  getPostViewCount = (req: CustomRequest, res: Response) => {
    const { discussionId } = req.body;
    DiscussionClient.GetPostViewCount({ discussionId }, (err, result) => {
      if (err) {
        res
          .status(StatusCode.BadRequest)
          .json({ success: false, message: err.details });
      } else {
        res.status(StatusCode.Accepted).json(result);
      }
    });
  };
}
