// // Actually Unnecessary
//
//
// const db = require('../models');
// const CartItems = db.cartItems;
//
// exports.create = (req, res) => {
//     if (!req.body.itemID) {
//         res.status(400).send({message: "Username cannot be empty"});
//         return
//     }
//
//     const itemID = {
//         itemID: req.body.itemID
//     }
//
//     CartItems.create(itemID)
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             res.status(500).send({message: err.message || 'Internal server error: An error occurred when creating'})
//         })
// }
//
// exports.findAll = (req, res) => {
//     CartItems.findAll()
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Internal server error: An error occurred when requesting"
//             })
//         })
// }
//
// exports.findOne = (req, res) => {
//     const id = req.params.id;
//
//     CartItems.findByPk(id)
//         .then(data => {
//             if (data){
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: "No user with id #" + id
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Internal server error: An error occurred when requesting id #" + id
//             })
//         })
// }
//
// exports.update = (req, res) => {
//     const idParam = req.params.id;
//
//     CartItems.update(req.body, {where: {id: idParam}})
//         .then(data => {
//             if (data == 1) {
//                 CartItems.findByPk(id)
//                     .then(data => {res.send(data)})
//                     .catch(err => {res.status(500).send({message: err.message})
//                     })
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Internal server error: An error occurred when updating id #" + idParam
//             })
//         })
// }