import express from "express";
import historyController from "../controllers/historyController.js";
import userController from "../controllers/userController.js";

const historyRouter = express.Router();

historyRouter.post(
  "/save",
  userController.verify,
  historyController.createHistory
);
historyRouter.get("/getHistory", historyController.getHistory);
historyRouter.delete("/deleteHistory/:id", historyController.deleteHistory);
historyRouter.delete("/clearAllData", historyController.clearAllData);

export default historyRouter;
