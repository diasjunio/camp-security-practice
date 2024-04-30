// models/User.js
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
}, {
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  }
});

module.exports = User;