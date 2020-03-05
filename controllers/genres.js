const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(`SELECT * FROM genres`, (error, results) => {
    res.send(results ? results : error);
  });
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT * FROM genres WHERE id = ${req.params.id}`,
    (error, results) => {
      res.send(results ? results : error);
    }
  );
});

module.exports = router;
