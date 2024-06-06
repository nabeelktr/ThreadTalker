import express, { Application } from "express";
import userController from "./controller";
import { isValidated } from "../auth/controller";

const discussionRoute: Application = express();

const controller = new userController();

discussionRoute.post("/create-discussion", isValidated, controller.createDiscussion);
discussionRoute.patch("/update-discussion",isValidated, controller.updateDiscussion);
discussionRoute.delete("/delete-discussion", isValidated, controller.deleteDiscussion);
discussionRoute.get("/get-list-by-tags", isValidated, controller.getListByTags);
discussionRoute.get("/get-list-by-text", isValidated, controller.getListByText);
discussionRoute.post("/add-comment", isValidated, controller.addComment);
discussionRoute.patch("/update-comment", isValidated, controller.updateComment);
discussionRoute.delete("/delete-comment", isValidated, controller.deleteComment);
discussionRoute.post("/like-discussion", isValidated, controller.likeDiscussion);
discussionRoute.get("/get-post-view-count", isValidated,  controller.getPostViewCount);

export default discussionRoute;
