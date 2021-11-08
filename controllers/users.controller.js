const db = require('../models');
const Users = db.users;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({message: "Username cannot be empty"});
        return
    }

    const user = req.body

    Users.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Internal server error: An error occurred when creating'})
        })
}

exports.findAll = (req, res) => {
    Users.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error: An error occurred when requesting"
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then(data => {
            if (data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: "No user with id #" + id
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error: An error occurred when requesting id #" + id
            })
        })
}

exports.update = (req, res) => {
    const idParam = req.params.id;

    Users.update(req.body, {where: {id: idParam}})
        .then(data => {
            if (data == 1) {
                Users.findByPk(idParam)
                    .then(data => {res.send(data)})
                    .catch(err => {res.status(500).send({message: err.message})
                    })
            }
            else {
                res.status(400).send({message: "not found"})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error: An error occurred when updating id #" + idParam
            })
        })
}