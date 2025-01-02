const sequelize = require('../config/database');
const Todo = require('./todo');

const initDB = async () => {
    await sequelize.sync({ force: false });
    console.log('Database synchronized');
};

module.exports = { Todo, initDB };
