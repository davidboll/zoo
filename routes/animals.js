import express from "express";
const animalsRouter = express.Router();


animalsRouter.get("/", (req, res) => {
  res.render("pages/animals.ejs")
});

animalsRouter.get("/mammals", (req, res) => {
  res.render("pages/mammals.ejs"); 
});

animalsRouter.get("/reptiles", (req, res) => {
  res.render("pages/reptiles.ejs"); 
});

animalsRouter.get("/birds", (req, res) => {
  res.render("pages/birds.ejs"); 
});


export default animalsRouter;
