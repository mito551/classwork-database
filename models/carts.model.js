module.exports = (sequelize, Sequelize) => {
    const Carts = sequelize.define('carts', {
        userID: {
            type: Sequelize.INTEGER
        },
        totalPrice: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'carts'
    });

    return Carts;
}