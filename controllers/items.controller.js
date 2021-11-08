const db = require('../models');
const Items = db.items;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({message: "Product name cannot be empty"});
        return
    }

    const item = req.body

    Items.create(item)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Internal server error: An error occurred when creating'})
        })
}

exports.findAll = (req, res) => {
    Items.findAll()
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

    Items.findByPk(id)
        .then(data => {
            if (data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: "No item with id #" + id
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

    Items.update(req.body, {where: {id: idParam}})
        .then(data => {
            if (data == 1) {
                Items.findByPk(id)
                    .then(data => {res.send(data)})
                    .catch(err => {res.status(500).send({message: err.message})
                    })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error: An error occurred when updating id #" + idParam
            })
        })
}