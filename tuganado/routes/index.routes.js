const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/", (req, res, next) => {
  res.render("auth/login");
});

router.get("/", (req, res, next) => {
  res.render("auth/register");
});

router.get("/", (req, res, next) => {
  res.render("ganado/add");
});

router.get("/", (req, res, next) => {
  res.render("ganado/list");
});

router.get("/", (req, res, next) => {
  res.render("ganado/single");
});

router.get("/", (req, res, next) => {
  res.render("ganado/add");
});

router.get("/", (req, res, next) => {
  res.render("ganado/edit");
});


module.exports = router;
