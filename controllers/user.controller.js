const UserController = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.user_add = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                throw err
            }
            let user = req.body;
            user.password = hash;
            UserController.create(user)
                .then(data => res.status(201).json(data))
                .catch(err => console.log(err))
        }
    )
}

exports.user_login = (req, res, next) => {
    UserController.findOne({
        where: {
            login: req.body.login
        }
    })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) return res.status(500).json(err)
                    else {
                        if (result) {
                            const token = jwt.sign({
                                login: user.login,
                                name: user.name
                            }, process.env.SECRET_PHRASE, {expiresIn: '24h'})
                            res.status(200).json({
                                token: token
                            })
                        } else return res.json({message: 'You fail'})
                    }
                })
            } else {
                res.status(404).json({message: 'Bad login / password'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.user_list = (req, res, next) => {
    UserController.findAll({
        order: [
            ['name', 'ASC']
        ]
    })
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err))
}
