'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve()
      .then(() => queryInterface.bulkInsert('hp_game', [
        {
          id: 'ca1761fb-c319-48ec-bf2f-1e6066d43e25',
          name: 'Match 1',
          phase: 'Groupes',
          starts_at: '2018-06-14T15:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '84b35ca0-264e-4c0d-b722-bde0f0a2114a',
          name: 'Match 2',
          phase: 'Groupes',
          starts_at: '2018-06-15T12:00:00.000Z',
          stadium: 'Ekaterinburg Arena',
          city: 'Ekaterinbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '7575cd3e-50bc-40ce-9754-ebde487c9d5f',
          name: 'Match 3',
          phase: 'Groupes',
          starts_at: '2018-06-15T15:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'e1d3e363-6794-4f07-bd41-5566e5a5d6b8',
          name: 'Match 4',
          phase: 'Groupes',
          starts_at: '2018-06-15T18:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'ada24108-7eb9-4bea-b86c-e91620991e80',
          name: 'Match 5',
          phase: 'Groupes',
          starts_at: '2018-06-16T10:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'dd24be1f-2d60-4b57-bbbf-006d48ac071b',
          name: 'Match 6',
          phase: 'Groupes',
          starts_at: '2018-06-16T13:00:00.000Z',
          stadium: 'Spartak Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '87528406-b74c-4de3-b910-c600dc6eaa51',
          name: 'Match 7',
          phase: 'Groupes',
          starts_at: '2018-06-16T16:00:00.000Z',
          stadium: 'Mordovia Arena',
          city: 'Saransk',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '0bbda060-6a77-4a11-981d-db90f29937a2',
          name: 'Match 8',
          phase: 'Groupes',
          starts_at: '2018-06-16T19:00:00.000Z',
          stadium: 'Kaliningrad Stadium',
          city: 'Kaliningrad',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '52034177-7490-4666-8538-13d58c7348d5',
          name: 'Match 9',
          phase: 'Groupes',
          starts_at: '2018-06-17T12:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '0df09a3b-c1d8-4eae-8641-9810a9700354',
          name: 'Match 10',
          phase: 'Groupes',
          starts_at: '2018-06-17T15:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '3a385121-0235-418f-9614-769ea0a691fe',
          name: 'Match 11',
          phase: 'Groupes',
          starts_at: '2018-06-17T18:00:00.000Z',
          stadium: 'Rostov Arena',
          city: 'Rostov-sur-le-Don',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '827d9f94-8ef6-400c-8a4e-cbb3b02b5c30',
          name: 'Match 12',
          phase: 'Groupes',
          starts_at: '2018-06-18T12:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '5bdcfde5-ad23-47dc-88b1-6a7905aac527',
          name: 'Match 13',
          phase: 'Groupes',
          starts_at: '2018-06-18T15:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '74d9e556-c36d-4228-be7b-1f7538b30dd1',
          name: 'Match 14',
          phase: 'Groupes',
          starts_at: '2018-06-18T18:00:00.000Z',
          stadium: 'Volgograd Arena',
          city: 'Volgograd',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'f3a454bd-32aa-43b8-afc9-2442d888107b',
          name: 'Match 15',
          phase: 'Groupes',
          starts_at: '2018-06-19T12:00:00.000Z',
          stadium: 'Mordovia Arena',
          city: 'Saransk',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'b2108152-afa8-459c-966d-5d49c564aa17',
          name: 'Match 16',
          phase: 'Groupes',
          starts_at: '2018-06-19T15:00:00.000Z',
          stadium: 'Spartak Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'c1acae8f-149f-433d-94c0-219a6b7f2952',
          name: 'Match 17',
          phase: 'Groupes',
          starts_at: '2018-06-19T18:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'bcc3d09e-eee9-4e0f-8ebd-779edbe20ff0',
          name: 'Match 18',
          phase: 'Groupes',
          starts_at: '2018-06-20T12:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '5369d5f2-4df1-4770-916d-f6e5af4879b4',
          name: 'Match 19',
          phase: 'Groupes',
          starts_at: '2018-06-20T15:00:00.000Z',
          stadium: 'Rostov Arena',
          city: 'Rostov-sur-le-Don',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '44207c6b-8b90-47ca-b1b9-585dcf868d4b',
          name: 'Match 20',
          phase: 'Groupes',
          starts_at: '2018-06-20T18:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '35fe7e57-bf87-41ab-9ae9-78fb1675d92a',
          name: 'Match 21',
          phase: 'Groupes',
          starts_at: '2018-06-21T12:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'e1b5e3bf-52c6-4c15-a992-da1d0647b328',
          name: 'Match 22',
          phase: 'Groupes',
          starts_at: '2018-06-21T15:00:00.000Z',
          stadium: 'Ekaterinburg Arena',
          city: 'Ekaterinbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '99d99eeb-105d-4937-a2a9-3251b89006ad',
          name: 'Match 23',
          phase: 'Groupes',
          starts_at: '2018-06-21T18:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '39dc0ff3-49e0-4425-bb74-878069667c21',
          name: 'Match 24',
          phase: 'Groupes',
          starts_at: '2018-06-22T12:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '59d86d25-0f5e-48d0-b8ec-c47193b881b1',
          name: 'Match 25',
          phase: 'Groupes',
          starts_at: '2018-06-22T15:00:00.000Z',
          stadium: 'Volgograd Arena',
          city: 'Volgograd',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '955cafb3-2b16-420b-9abb-c757b04b83ae',
          name: 'Match 26',
          phase: 'Groupes',
          starts_at: '2018-06-22T18:00:00.000Z',
          stadium: 'Kaliningrad Stadium',
          city: 'Kaliningrad',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '9f457f7a-0353-4dfa-a5ab-7df969eecfc6',
          name: 'Match 27',
          phase: 'Groupes',
          starts_at: '2018-06-23T12:00:00.000Z',
          stadium: 'Spartak Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'b98893b9-0cc0-4e0c-a026-d1a43a25613c',
          name: 'Match 28',
          phase: 'Groupes',
          starts_at: '2018-06-23T15:00:00.000Z',
          stadium: 'Rostov Arena',
          city: 'Rostov-sur-le-Don',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '2edbbd10-2e3d-46d8-a08f-32dbbc30e2e5',
          name: 'Match 29',
          phase: 'Groupes',
          starts_at: '2018-06-23T18:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '758ac6d8-92bb-4540-a04c-67464be26de8',
          name: 'Match 30',
          phase: 'Groupes',
          starts_at: '2018-06-24T12:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '5c1b3beb-6d52-4694-865c-d6df99d55b91',
          name: 'Match 31',
          phase: 'Groupes',
          starts_at: '2018-06-24T15:00:00.000Z',
          stadium: 'Ekaterinburg Arena',
          city: 'Ekaterinbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '540fa109-084b-4b5a-9426-021238030736',
          name: 'Match 32',
          phase: 'Groupes',
          starts_at: '2018-06-24T18:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '6fedb2e1-1e7e-4d09-b3c3-367d0496586f',
          name: 'Match 33',
          phase: 'Groupes',
          starts_at: '2018-06-25T14:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '0c6314c3-d38e-46d0-8007-3bcb10f5a0fb',
          name: 'Match 34',
          phase: 'Groupes',
          starts_at: '2018-06-25T14:00:00.000Z',
          stadium: 'Volgograd Arena',
          city: 'Volgograd',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '639f5ac9-ae54-42a3-9975-e57baed769fe',
          name: 'Match 35',
          phase: 'Groupes',
          starts_at: '2018-06-25T18:00:00.000Z',
          stadium: 'Kaliningrad Stadium',
          city: 'Kaliningrad',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '390ffc38-aa6e-4913-8442-035fd231fad0',
          name: 'Match 36',
          phase: 'Groupes',
          starts_at: '2018-06-25T18:00:00.000Z',
          stadium: 'Mordovia Arena',
          city: 'Saransk',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'e3cd74aa-e411-429a-a112-9883a26294a9',
          name: 'Match 37',
          phase: 'Groupes',
          starts_at: '2018-06-26T14:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '9dd38a2f-ab08-494c-ac76-95b5bd0c303f',
          name: 'Match 38',
          phase: 'Groupes',
          starts_at: '2018-06-26T14:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '1d11424c-add1-45d3-89f3-ef449c0bf264',
          name: 'Match 39',
          phase: 'Groupes',
          starts_at: '2018-06-26T18:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '95b99748-6cb6-4555-9f1b-bff4058c1a3f',
          name: 'Match 40',
          phase: 'Groupes',
          starts_at: '2018-06-26T18:00:00.000Z',
          stadium: 'Rostov Arena',
          city: 'Rostov-sur-le-Don',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'b5ef75e9-4516-472f-9c4b-210c15b7f104',
          name: 'Match 41',
          phase: 'Groupes',
          starts_at: '2018-06-27T14:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'e5c1679c-0617-4b5f-b310-73608daf62a9',
          name: 'Match 42',
          phase: 'Groupes',
          starts_at: '2018-06-27T14:00:00.000Z',
          stadium: 'Ekaterinburg Arena',
          city: 'Ekaterinbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'b27e250f-204b-4ed3-b385-147088ae7fba',
          name: 'Match 43',
          phase: 'Groupes',
          starts_at: '2018-06-27T18:00:00.000Z',
          stadium: 'Spartak Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '8b7735e8-eb9f-41ac-8005-98717c936d75',
          name: 'Match 44',
          phase: 'Groupes',
          starts_at: '2018-06-27T18:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '9b896fdf-5ebd-44c8-ad86-02defa8be39e',
          name: 'Match 45',
          phase: 'Groupes',
          starts_at: '2018-06-28T14:00:00.000Z',
          stadium: 'Volgograd Arena',
          city: 'Volgograd',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '26af88f2-fd21-46fb-8f72-117f20e7dffa',
          name: 'Match 46',
          phase: 'Groupes',
          starts_at: '2018-06-28T14:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '356efd06-3738-4bc6-86d6-1d2b5c986d43',
          name: 'Match 47',
          phase: 'Groupes',
          starts_at: '2018-06-28T18:00:00.000Z',
          stadium: 'Mordovia Arena',
          city: 'Saransk',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'b693c6e2-44ce-4639-a76f-b210e6bb8f4d',
          name: 'Match 48',
          phase: 'Groupes',
          starts_at: '2018-06-28T18:00:00.000Z',
          stadium: 'Kaliningrad Stadium',
          city: 'Kaliningrad',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '063484e8-8c22-428e-8ced-87363c8fa102',
          name: 'Match 49',
          phase: 'Huitièmes de finale',
          starts_at: '2018-06-30T14:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '9b47cf8c-a5d5-486f-824f-2833449bd392',
          name: 'Match 50',
          phase: 'Huitièmes de finale',
          starts_at: '2018-06-30T18:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'addcb4b7-bf56-40e3-b744-91caa73e7715',
          name: 'Match 51',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-01T14:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '6fa894af-3899-4028-99c5-fd8bda07dc93',
          name: 'Match 52',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-01T18:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '04b2664d-e6c3-48b5-b888-63eaf00961d3',
          name: 'Match 53',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-02T14:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '48b4e0cf-f259-4ff4-807a-78e1142ef75a',
          name: 'Match 54',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-02T18:00:00.000Z',
          stadium: 'Rostov Arena',
          city: 'Rostov-sur-le-Don',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '166e2b5e-a994-47d9-80cb-32e9f1f8e4a1',
          name: 'Match 55',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-03T14:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '40530a40-7840-4635-9370-12d1de40a8c8',
          name: 'Match 56',
          phase: 'Huitièmes de finale',
          starts_at: '2018-07-03T18:00:00.000Z',
          stadium: 'Spartak Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '70372301-6d7e-479b-9b65-5f5d56ffb4a9',
          name: 'Match 57',
          phase: 'Quarts de finale',
          starts_at: '2018-07-06T14:00:00.000Z',
          stadium: 'Nizhny Novgorod Stadium',
          city: 'Nijni-Novgorod',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '73c1e25e-b3e7-4316-85fc-70acff0247a5',
          name: 'Match 58',
          phase: 'Quarts de finale',
          starts_at: '2018-07-06T18:00:00.000Z',
          stadium: 'Kazan Arena',
          city: 'Kazan',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '71ef2baa-fda8-457f-a22f-1f18e88f2a24',
          name: 'Match 59',
          phase: 'Quarts de finale',
          starts_at: '2018-07-07T14:00:00.000Z',
          stadium: 'Samara Arena',
          city: 'Samara',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '68832893-8c24-4a51-b973-925c8b66db25',
          name: 'Match 60',
          phase: 'Quarts de finale',
          starts_at: '2018-07-07T18:00:00.000Z',
          stadium: 'Fisht Stadium',
          city: 'Sotchi',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'e0f01c35-7bec-453a-9a28-6500359fc3c6',
          name: 'Match 61',
          phase: 'Demi-finales',
          starts_at: '2018-07-10T18:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'f9ae03e3-e864-482c-803f-4435e1ea8d8d',
          name: 'Match 62',
          phase: 'Demi-finales',
          starts_at: '2018-07-11T18:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: '1eabe9ad-3979-4ebf-9133-a17bfb278c5a',
          name: 'Match 63',
          phase: 'Match pour la troisième place',
          starts_at: '2018-07-14T14:00:00.000Z',
          stadium: 'Stade de Saint-Pétersbourg',
          city: 'Saint-Pétersbourg',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
        {
          id: 'cddf5ba9-152f-4c84-8aca-bbcc35f6e0ab',
          name: 'Match 64',
          phase: 'Finale',
          starts_at: '2018-07-15T15:00:00.000Z',
          stadium: 'Luzhniki Stadium',
          city: 'Moscou',
          risk_id: '08705cff-e4a2-4d1a-8940-1cce00c2c2f4',
        },
      ]));
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve()
      .then(() => queryInterface.bulkDelete('hp_game'));
  },
};
