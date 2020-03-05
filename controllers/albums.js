const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT albums.id, albums.name, artists.name AS 'artist', albums.cover FROM albums
LEFT JOIN artists
ON albums.artist = artists.id
`,
    (error, results) => {
      res.send(results ? results : error);
    }
  );
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT albums.id, albums.name, artists.name AS 'artist', albums.cover FROM albums
LEFT JOIN artists
ON albums.artist = artists.id WHERE albums.id = ${req.params.id}`,
    (error, results) => {
      res.send(results ? results : error);
    }
  );
});

module.exports = router;
