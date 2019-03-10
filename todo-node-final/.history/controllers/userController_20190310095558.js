//import libs
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

//import connection to MongoDB and MySQL databases
var { mongoose } = require('../db/config');

//import Mongoose models
var { User } = require('../models/user');

//import middlewares
var {authenticate} = require('../middleware/authenticate');

const router = express.Router();

router.use(bodyParser.json());

router.post('/user/subscribe', (req, res) => {
    console.log('reqb boy' + JSON.stringify(req.body));
    var body = _.pick(req.body, ['firstname','lastname','email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

router.get('/user/info', authenticate, (req, res) => {
    res.send(req.user);
});

router.post('/user/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

router.delete('/user/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});

router.get('/', (req, res) => {
    res.send('From user route')
})

module.exports = router;