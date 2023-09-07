'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosDispositivos = [
      {
        estado_dispositivo: 'Sin estado',
        activo: 1,
        por_defecto: 1,
        orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_dispositivo: 'Nuevo',
        activo: 1,
        por_defecto: 0,
        orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_dispositivo: 'Usado',
        activo: 1,
        por_defecto: 0,
        orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_dispositivo: 'Reacondicionado',
        activo: 1,
        por_defecto: 0,
        orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('estados_dispositivos', datosDispositivos, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estados_dispositivos', null, {});
  }
};