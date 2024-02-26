import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3007;

// Get the current directory path of the module
const __dirname = path.resolve();

// (OPTIONAL) 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
});

app.listen(port, () => {
  console.log(`Server is on and listening to ${port}`);
});
