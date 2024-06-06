import mongoose, { Document, Model, Schema } from "mongoose";
import CommentModel, { IComment } from "./comment.schema";

export interface IDiscussion extends Document {
  text: string;
  image?: string;
  hashtags: string[];
  user_id?: string;
  created_on: Date;
  view_count: number;
  comments: IComment[];
  like_count: {
    type: {
      count: { type: Number, default: 0 },
      users: [{ userId: { type: String } }],
    },
    default: { count: 0, users: [] }, 
  },
}

const discussionSchema: Schema<IDiscussion> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    hashtags: [
      {
        type: String,
      },
    ],
    view_count: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    like_count: {
        type: {
          count: { type: Number, default: 0 },
          users: [{ userId: { type: String } }],
        },
        default: { count: 0, users: [] }, 
      },
  },
  { timestamps: true }
);

const DiscussionModel: Model<IDiscussion> = mongoose.model<IDiscussion>(
  "Discussion",
  discussionSchema
);
export default DiscussionModel;
