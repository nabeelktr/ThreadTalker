import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment extends Document {
  userId: string;
  text: string;
  created_on: Date;
  like_count: number;
  replies: string[];
}

const commentSchema: Schema<IComment> = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    like_count: {
      type: Number,
      default: 0,
    },
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const CommentModel: Model<IComment> = mongoose.model<IComment>("Comment", commentSchema);
export default CommentModel;
