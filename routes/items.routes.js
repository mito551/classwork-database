module.exports = app => {
    const items = require('../controllers/items.controller')
    const router = require('express').Router()

    router.get('/', items.findAll)
    router.get('/:id', items.findOne)
    router.post('/', items.create)
    router.put('/:id', items.update)

    app.use('/api/items', router);
}