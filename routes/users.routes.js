module.exports = app => {
    const users = require('../controllers/users.controller')
    const router = require('express').Router()

    router.get('/', users.findAll)
    router.get('/:id', users.findOne)
    router.post('/', users.create)
    router.put('/:id', users.update)

    app.use('/api/users', router);
}