const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST Route
router.post('/', (req, res) => {
    let queryText = "INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)";
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })
}); // End POST Route

module.exports = router;