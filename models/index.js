const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: dbConfig.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.carts = require('./carts.model.js')(sequelize, Sequelize)
db.items = require('./items.model.js')(sequelize, Sequelize)
db.users = require('./users.model.js')(sequelize, Sequelize)
db.cartItems = require('./cartItems.model.js')(sequelize, Sequelize)

module.exports = db;