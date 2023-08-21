export = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vacancies', [
      {
        title: "secretaria",
        description: "secretaria",
        requirement: '',
        sallary: '3000',
        benefits: 'VA/VR de 1200 R$, Plano de Saúde',
        workSchedule: 'Segunda à sexta-feira das 7:30 as 12:00 e das 13:12 as 17:30 - Não trabalha aos Sábados',
        amount: 2,
        model: 'Modelo CLT - presencial',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Desenvolvedor Front End",
        description: "Dev Front",
        requirement: 'HTML, CSS, JS , REACT',
        sallary: '5000',
        benefits: 'VA/VR de 1200 R$, Plano de Saúde',
        workSchedule: 'Segunda à sexta-feira das 7:30 as 12:00 e das 13:12 as 17:30 - Não trabalha aos Sábados',
        amount: 2,
        model: 'Modelo CLT - Remoto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vacancies', null, {});
  },
};
