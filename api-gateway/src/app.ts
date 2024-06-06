import cors from "cors";
import express from "express";
import { Application } from "express";
import logger from "morgan";
// import userRoute from "./modules/user/route";
// import authRoute from "./modules/auth/route";
import cookieParser from "cookie-parser";
import { errorHandler } from "@nabeelktr/error-handler";
import { limiter } from "./utils/rateLimitter";
import "dotenv/config"
import userRoute from "./modules/user/route";
import discussionRoute from "./modules/discussion/route";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.applyMiddleware();
    this.routes();
  }

  private applyMiddleware(): void {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );
    this.app.use(logger("dev"));
    this.app.use(cookieParser());
    this.app.use(errorHandler);
    this.app.use(limiter)
  }

  private routes(): void {
    this.app.use("/api/v1/user", userRoute);
    this.app.use("/api/v1/discussion", discussionRoute);
  }

  public startServer(port: number): void {
    this.app.listen(port, () => {
      console.log(`API-Gateway started on ${port}`);
    });
  }
}

export default App;
