var express = require("express");
var app = express();

// dependencies
// set deafult view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

// routes
// index route
app.get("/", function(req, res) {
  res.render("index");
});

// listener
app.listen(3000, process.env.IP, function() {
  console.log("Server has started");
});
