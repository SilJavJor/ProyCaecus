'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosOperacions = [
      {
        estado_operacion: 'Sin operacion',
        activo: 1,
        por_defecto: 1,
        orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_operacion: 'Pendiente',
        activo: 1,
        por_defecto: 0,
        orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_operacion: 'Completada',
        activo: 1,
        por_defecto: 0,
        orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        estado_operacion: 'En Proceso',
        activo: 1,
        por_defecto: 0,
        orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('estados_operaciones', datosOperacions, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estados_operaciones', null, {});
  }
};