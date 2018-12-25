const express = require('express');
const router = express.Router();

const db = require('./firestore.js');

const controllers = require('./controllers/index.js');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', (req, res, next) => res.send('Up and Running!') )

router.post('/users/login', (req, res, next) => controllers.usersController.login(req.body, req, res, next) );
router.post('/users/register', (req, res, next)  => controllers.usersController.register(req.body, req, res, next) );
router.get('/users/find', (req, res, next) => controllers.usersController.findAll(req, res, next) );

module.exports = router;
