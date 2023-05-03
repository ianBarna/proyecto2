const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("../auth/login", (req, res, next) => {
  res.render("auth/login");
});

router.get("/auth/register", (req, res, next) => {
  res.render("auth/register");
});

router.get("/ganado/add", (req, res, next) => {
  res.render("ganado/add");
});

router.get("/ganado/list", (req, res, next) => {
  res.render("ganado/list");
});

router.get("/ganado/single", (req, res, next) => {
  res.render("ganado/single");
});

router.get("/ganado/add", (req, res, next) => {
  res.render("ganado/add");
});

router.get("/ganado/edit", (req, res, next) => {
  res.render("ganado/edit");
});


module.exports = router;
