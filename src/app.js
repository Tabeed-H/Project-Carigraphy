const express = require("express");
const path = require("path");
const hbs = require("hbs");

// Setting up express
const app = express();
const PORT = process.env.PORT || 5500;

// set public folder
const publicDirectory = path.join(__dirname, `/Public`);
app.use(express.static(publicDirectory));

// setting up views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, `views/templates`));
hbs.registerPartials(path.join(__dirname, `views/partials`));

// setting route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, "192.168.43.22", (err) => {
  if (err) {
    console.log(`Error : ${err.message}`);
    return 0;
  }
  console.log(`Server Started on http://192.168.43.22:${PORT}`);
});
