const db = require('../models');
const Carts = db.carts;
const cartsItems = db.cartItems

exports.create = (req, res) => {
    if (!req.body.userID) {
        res.status(400).send({message: "UserID cannot be empty"});
        return
    }

    const userID = {
        userID: req.body.userID
    }

    const items = req.body.items

    Carts.create(userID)
        .then(data => {
            const newData = [];
            const totalPrice = 0; // todo: add up the prices
            items.forEach(item => {
                cartsItems.create({...item, cartID: data.id})
                    .then(itemData => {
                        newData.push(itemData)

                    })
                    .catch(err => {
                        res.status(500).send({message: err.message})
                    })
            })
            res.send({...data, items: newData})
            // todo: does this even work?
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Internal server error: An error occurred when creating'})
        })
}

exports.findAll = (req, res) => {
    Carts.findAll()
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

    Carts.findByPk(id)
        .then(data => {
            if (data){
                const result = {...data.dataValues};
                console.log(result)
                cartsItems.findAll({where: {cartID: id}})
                    .then(dataItems => {
                        // console.log(dataItems)
                        result.items = dataItems
                        res.send(result);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message
                        })
                    })

            } else {
                res.status(404).send({
                    message: "No cart with id #" + id
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

    Carts.update(req.body, {where: {id: idParam}})
        .then(data => {
            if (data == 1) {
                Carts.findByPk(id)
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