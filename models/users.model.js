module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'users'
    });

    return Users;
}