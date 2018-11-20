const express = require("express");
const hbs = require("hbs");

const expressApp = express();

hbs.registerPartials(__dirname + "/views/partials/common");

//Register HBS engine
expressApp.set("view engine", "hbs");

expressApp.use(express.static(__dirname));

expressApp.get("/", (req, res) => {
    res.render("product-listing");
});

expressApp.get("/productDescription", (req, res) => {
    res.render("product-description");
});

expressApp.listen("8000", () => {
    console.log("Express server is listening on port 8000..");
});