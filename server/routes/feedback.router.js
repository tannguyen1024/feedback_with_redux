const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM feedback ORDER by id DESC;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
    }) // End Catch
}) // END GET Route

// DELETE Route
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `DELETE FROM feedback WHERE id = $1;`;
    pool.query(queryText, [id])
    .then((result) => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log(`An error has occurred`, error);
        res.sendStatus(500);
    }) // End Catch
}) // END DELETE Route

// POST Route
router.post('/', (req, res) => {
    let queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })
}); // End POST Route

module.exports = router;