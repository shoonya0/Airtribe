const express = require('express');
const router = express.Router();

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Delete user ${userId}`);
});

module.exports = router;