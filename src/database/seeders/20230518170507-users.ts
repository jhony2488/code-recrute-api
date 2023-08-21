
export = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'jhony45@gmail.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'christian45@gmail.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
