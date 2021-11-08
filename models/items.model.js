module.exports = (sequelize, Sequelize) => {
    const Items = sequelize.define('items', {
        title: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        itemCode: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'items'
    });

    return Items;
}