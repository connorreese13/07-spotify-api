const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT songs.name, albums.name AS 'album', artists.name AS 'artist', genres.name AS 'genre', songs.audio FROM songs
INNER JOIN albums
ON songs.album = albums.id
INNER JOIN artists
ON songs.artist = artists.id
INNER JOIN genres
ON songs.genre = genres.id
${
  Object.keys(req.query).length > 0
    ? "  WHERE  " +
      Object.keys(req.query)
        .map(e => `  songs.${e} = ${req.query[e]}  `)
        .join("AND")
    : ""
} `,

    (error, results) => {
      res.send(results ? results : error);
    }
  );
});

module.exports = router;
