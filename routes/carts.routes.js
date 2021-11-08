module.exports = app => {
    const carts = require('../controllers/carts.controller')
    const router = require('express').Router()

    router.get('/', carts.findAll)
    router.get('/:id', carts.findOne)
    router.post('/', carts.create)
    router.put('/:id', carts.update)

    app.use('/api/carts', router);
}