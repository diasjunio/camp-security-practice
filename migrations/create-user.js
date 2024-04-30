// migrations/create-user.js
const { QueryTypes } = require('sequelize');
const sequelize = require('../sequelize');

module.exports = {
  up: async () => {
    const usersData = [];
    for (let i = 0; i < 10; i++) {
      usersData.push({
        username: `user${i}`,
        password: `password${i}`,
      });
    }
    await sequelize.models.User.bulkCreate(usersData);
  },

  down: async () => {
    await sequelize.query("DELETE FROM users", { type: QueryTypes.DELETE });
  },
};