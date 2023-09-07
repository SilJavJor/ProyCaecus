'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosRoles = [
      {
        descripcion_rol: 'Administrador',
        activo: 1,
        por_defecto: 0,
        orden: 1,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion_rol: 'Colaborador',
        activo: 1,
        por_defecto: 0,
        orden: 2,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion_rol: 'Donante',
        activo: 1,
        por_defecto: 0,
        orden: 3,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      },

      {
        descripcion_rol: 'Solicitante',
        activo: 1,
        por_defecto: 0,
        orden: 4,
        creado_por: 'Sistema',
        fecha_creacion: new Date(),
        modificado_por: 'Sistema',
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('roles', datosRoles, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};