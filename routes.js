const express = require("express");
const routes = express.Router();
const instructors = require("./instructors");

routes.get("/", (req, res) => {
    return res.render("instructors.html")
});

routes.get("/create-instructors", (req, res) => {
    return res.render("create-instructors.html")
});

routes.post("/", instructors.post)

routes.get("/members", (req, res) => {
    return res.render("members.html")
});

module.exports = routes;