import express from "express";
const animalsRouter = express.Router();

animalsRouter.get("/", (req, res) => {
  res.render("pages/animals.ejs")
});


export default animalsRouter;
