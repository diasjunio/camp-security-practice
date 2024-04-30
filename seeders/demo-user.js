const User = require('../models/User');

module.exports = {
  up: async () => {
    try {
      const users = Array.from({ length: 10 }, (_, i) => ({
        username: `user${i}`,
        password: `password${i}`,
      }));

      await User.bulkCreate(users);
      console.log('Usuários de exemplo criados com sucesso.');
    } catch (error) {
      console.error('Erro ao criar usuários de exemplo:', error);
    }
  },
  down: async () => {
    try {
      await User.destroy({
        where: {},
        truncate: true,
      });
      console.log('Usuários de exemplo removidos com sucesso.');
    } catch (error) {
      console.error('Erro ao remover usuários de exemplo:', error);
    }
  },
};