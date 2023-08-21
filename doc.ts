import version from 'project-version';

const doc = {
  info: {
    version,
    title: 'api-desafio-flow-driver',
    description: '',
  },
  host: 'localhost:80',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Default',
      description: 'Endpoints of default endpoints',
    },
    {
      name: 'Clients',
      description: 'Endpoints of client',
    },
    {
      name: 'ClientsLogs',
      description: 'Endpoints of logs client',
    },
    {
      name: 'Vehicles',
      description: 'Endpoints of type vehicles',
    },
    {
      name: 'UserVehiclesTypes',
      description: 'Endpoints of relacionamento entre clientes e tipos de carros',
    },
    {
      name: 'NotesAndCoins',
      description: 'Endpoints of notes and coins',
    },
  ],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'auth-token',
      in: 'header',
    },
  },
  definitions: {
    Error400: {
      message: 'Descrição sobre o erro',
    },
    Error406: {
      message: 'Descrição sobre o erro',
    },
    Error403: {
      message: 'Descrição sobre o erro',
    },
    ErrorTokenInvalid: { message: 'Token Invalid || Token not provided' },
    DefaultIndex: {
      version,
    },
    GetClients: {
      result: [
        {
          id: 6,
          plate: 'j6o36986-7897hjhih',
          VehicleTypeId: 1,
          createdAt: '2023-05-30T21:46:51.812Z',
          updatedAt: '2023-05-30T21:46:51.812Z',
          logs: [
            {
              id: 3,
              prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
              exit: '',
              idUser: 6,
              price: null,
              paidOut: false,
              paidOutPrice: null,
              changeValue: null,
              priceVehicle: null,
              createdAt: '2023-05-30T21:46:51.861Z',
              updatedAt: '2023-05-30T21:46:51.861Z',
            },
          ],
          vehicleType: [],
        },
        {
          id: 1,
          plate: 'jh46o3686-7897hjhih',
          VehicleTypeId: 1,
          createdAt: '2023-05-30T21:22:34.479Z',
          updatedAt: '2023-05-30T21:22:34.479Z',
          logs: [
            {
              id: 1,
              prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
              exit: 'Tue May 30 2023 14:53:02 GMT-0300 (Horário Padrão de Brasília)',
              idUser: 1,
              price: 10,
              paidOut: true,
              paidOutPrice: 17,
              changeValue: 7,
              priceVehicle: 5,
              createdAt: '2023-05-30T21:22:34.558Z',
              updatedAt: '2023-05-30T21:23:53.713Z',
            },
          ],
          vehicleType: [],
        },
        {
          id: 3,
          plate: 'jh46o36986-7897hjhih',
          VehicleTypeId: 1,
          createdAt: '2023-05-30T21:26:53.935Z',
          updatedAt: '2023-05-30T21:26:53.935Z',
          logs: [],
          vehicleType: [],
        },
      ],
    },
    SetClient: {
      plate: 'j6o3698i6-7j897hhjkjh7ih',
      VehicleTypeId: 1,
      LogClients: [
        {
          prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
          exit: '',
          price: null,
          paidOut: false,
          changeValue: null,
          paidOutPrice: null,
          priceVehicle: 5,
          idUser: null,
        },
      ],
    },
    UpdateClient: {
      plate: 'hh6-ghgh7',
      VehicleTypeId: 1,
    },
    MessageSetClient: {
      message: 'Client criado com sucesso',
      plate: 'j6o3698i6-7j897hhjkjh7ih',
      VehicleTypeId: 1,
      LogClients: [
        {
          prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
          exit: '',
          price: null,
          paidOut: false,
          changeValue: null,
          paidOutPrice: null,
          priceVehicle: 5,
          idUser: null,
        },
      ],
    },
    MessageUpdateClient: {
      message: 'Client atualizado com sucesso',
      plate: 'hh6-ghgh7',
      VehicleTypeId: 1,
    },
    MessageDeleteClient: {
      message: 'Cliente deletado com sucesso',
    },
    GetVehicles: {
      result: [
        {
          id: 1,
          name: 'Carro',
          value: 5,
          createdAt: '2023-05-30T19:09:09.977Z',
          updatedAt: '2023-05-30T19:09:09.977Z',
        },
        {
          id: 2,
          name: 'Moto',
          value: 3,
          createdAt: '2023-05-30T19:09:17.788Z',
          updatedAt: '2023-05-30T19:09:17.788Z',
        },
        {
          id: 3,
          name: 'Caminhão',
          value: 8,
          createdAt: '2023-05-30T19:09:27.440Z',
          updatedAt: '2023-05-30T19:09:27.440Z',
        },
      ],
    },
    setVehicles: {
      name: 'Carro',
      value: 5,
    },
    MessageTypeVehicle: {
      message: 'Veiculo criada com sucesso',
      name: 'Caminhão',
      value: 8,
    },
    MessageUpdateVehicle: {
      message: 'Veiculo atualizado com sucesso',
      name: 'Carro',
      value: 5,
    },
    MessageDeleteVehicle: {
      message: 'Veiculo deletado com sucesso',
    },
    GetMoney: {
      result: [
        {
          id: 8,
          value: '0.10',
          amount: 3,
          createdAt: '2023-05-30T21:27:07.466Z',
          updatedAt: '2023-05-30T21:27:07.466Z',
        },
        {
          id: 2,
          value: '5',
          amount: 6,
          createdAt: '2023-05-30T21:23:15.070Z',
          updatedAt: '2023-05-30T21:28:08.265Z',
        },
        {
          id: 5,
          value: '20',
          amount: 6,
          createdAt: '2023-05-30T21:23:30.199Z',
          updatedAt: '2023-05-30T21:28:11.811Z',
        },
        {
          id: 3,
          value: '2',
          amount: 0,
          createdAt: '2023-05-30T21:23:19.530Z',
          updatedAt: '2023-05-30T21:28:53.978Z',
        },
        {
          id: 7,
          value: '0.25',
          amount: 0,
          createdAt: '2023-05-30T21:27:02.736Z',
          updatedAt: '2023-05-30T21:28:53.979Z',
        },
        {
          id: 6,
          value: '0.5',
          amount: 0,
          createdAt: '2023-05-30T21:23:35.737Z',
          updatedAt: '2023-05-30T21:28:53.979Z',
        },
        {
          id: 1,
          value: '0.05',
          amount: 0,
          createdAt: '2023-05-30T21:23:10.806Z',
          updatedAt: '2023-05-30T21:28:53.979Z',
        },
        {
          id: 4,
          value: '10',
          amount: 0,
          createdAt: '2023-05-30T21:23:24.683Z',
          updatedAt: '2023-05-30T21:31:14.898Z',
        },
      ],
    },
    setMoney: {
      value: '0.10',
      amount: 3,
    },
    MessageSetMoney: {
      message: 'Moedas/dinheiro criada com sucesso',
      amount: 3,
      value: '0.10',
    },
    UpdateCoins: {
      amountsWithdrawn: [
        {
          value: '5',
          amount: -1,
        },
        {
          value: '10',
          amount: -2,
        },
      ],
    },
    UpdateMoney: {
      value: '2',
      amount: 100,
    },
    UpdateAmountCoin: {
      amount: 6,
    },
    MessageDeleteCoin: {
      message: 'Moeda deletado com sucesso',
    },
    MessageUpdateAmountCoins: {
      message: 'Nota/Moeda atualizadas com sucesso',
      amount: 6,
    },
    MessageUpdateCoin: {
      message: 'Nota/Moeda atualizadas com sucesso',
      amount: 100,
      value: '2',
    },
    MessageUpdateCoins: {
      message: 'Notas atualizadas com sucesso',
    },
    GetLogs: {
      result: [
        {
          id: 1,
          prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
          exit: '',
          idUser: 1,
          price: null,
          paidOut: false,
          paidOutPrice: null,
          changeValue: null,
          priceVehicle: null,
          createdAt: '2023-05-30T21:22:34.558Z',
          updatedAt: '2023-05-30T21:22:34.558Z',
          client: {
            id: 1,
            plate: 'jh46o3686-7897hjhih',
            VehicleTypeId: 1,
            createdAt: '2023-05-30T21:22:34.479Z',
            updatedAt: '2023-05-30T21:22:34.479Z',
          },
        },
      ],
    },
    setLogs: {
      prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
      exit: '',
      price: null,
      paidOut: false,
      changeValue: null,
      paidOutPrice: null,
      priceVehicle: 5,
      idUser: 6,
    },
    UpdateLogs: {
      prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
      exit: 'Tue May 30 2023 14:53:02 GMT-0300 (Horário Padrão de Brasília)',
      price: null,
      paidOut: true,
      changeValue: null,
      paidOutPrice: 15,
      priceVehicle: 5,
      idUser: 10,
    },
    MessageSetLog: {
      message: 'Log de Cliente criado com sucesso',
      prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
      exit: '',
      price: null,
      paidOut: false,
      changeValue: null,
      paidOutPrice: null,
      idUser: 6,
    },
    MessageUpdateLog: {
      message: 'Log de Cliente atualizado com sucesso',
      messageChange: 'Não falta dinheiro',
      prohibited: 'Tue May 30 2023 12:53:02 GMT-0300 (Horário Padrão de Brasília)',
      exit: 'Tue May 30 2023 14:53:02 GMT-0300 (Horário Padrão de Brasília)',
      price: 10,
      paidOut: true,
      changeValue: {
        changeValue: 5,
        message: 'Não falta dinheiro',
      },
      paidOutPrice: 15,
      idUser: 10,
      changeValueNotas: [
        {
          value: 0.1,
          amount: 3,
        },
      ],
    },
    DeleteLogMessage: {
      message: 'Log de Cliente deletado com sucesso',
    },
    GetUserVehiclesType: {
      result: [
        {
          userId: 1,
          VehicleTypeId: 1,
          createdAt: '2023-05-30T15:38:50.567Z',
          updatedAt: '2023-05-30T15:38:50.567Z',
          ClientId: 1,
        },
        {
          userId: 1,
          VehicleTypeId: 3,
          createdAt: '2023-05-30T15:39:22.356Z',
          updatedAt: '2023-05-30T15:39:22.356Z',
          ClientId: 1,
        },
        {
          userId: 1,
          VehicleTypeId: 2,
          createdAt: '2023-05-30T15:41:57.881Z',
          updatedAt: '2023-05-30T15:41:57.881Z',
          ClientId: 1,
        },
      ],
    },
  },
};

module.exports = doc;
