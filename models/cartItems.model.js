module.exports = (sequelize, Sequelize) => {
    const CartItems = sequelize.define('cart_items', {
        cartID: {
            type: Sequelize.INTEGER
        },
        itemID: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'cart_items'
    });

    return CartItems;
}