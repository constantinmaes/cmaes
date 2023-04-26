var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    const users = require('./generated.json');
    res.json(users);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const users = require('./generated.json');
    const user = users.find((u) => u._id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'user not found' });
    }
});

module.exports = router;
