const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { getConfig } = require("./config");
const { usersRouter } = require("./resources/users/users.controller");

class UsersServer {
  constructor() {
    this.app = null;
  }
  start() {
    this.initServer();
    this.initConfig();
    // this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHanling();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initConfig() {
    dotenv.config({ path: path.resolve(__dirname, "../.env") });
  }

  initMiddlewares() {
    this.app.use(express.json());
  }
  initRoutes() {
    this.app.use("/users", usersRouter);
  }

  initErrorHanling() {
    this.app.use((err, req, res, next) => {
      const errorCode = err.status || 500;
      res.status(errorCode).send(err.message);
    });
  }

  startListening() {
    const { port } = getConfig();

    this.app.listen(port, () => {
      console.log("Start listening on port", port);
    });
  }
}

exports.UsersServer = UsersServer;
