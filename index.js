import express from "express";
import path from "path";
import bodyParser from "body-parser";
import animalsRouter from "./routes/animals.js";
import { Animal, arrayOfAnimals } from './data/constructor.js';

const app = express();
const port = process.env.PORT || 3007;

app.use(bodyParser.urlencoded({ extended: true }));
// Get the current directory path of the module
const __dirname = path.resolve();

// (OPTIONAL) 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


 app.get("/", (req, res) => {
  res.render("pages/index.ejs")
});

app.use("/animals", animalsRouter);

app.post("/ReadMore", (req, res) => {
   const index = req.body.index;
  const selectedAnimal = arrayOfAnimals[index];
   console.log(selectedAnimal);
  res.render("pages/readmore.ejs", {selectedAnimal, Animal, arrayOfAnimals}); 
});

app.listen(port, () => {
  console.log(`Server is on and listening to ${port}`);
});
