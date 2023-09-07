'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const datosUsuarios = [
      {
        nombre: 'admin',
        email: 'admin@example.com',
        contrasenia: 'hashed_password_here',
        id_rol: 1,
        descripcion_rol: 'Administrador',
        fecha_creacion: new Date(),
        fecha_modificacion: new Date()
      }
    ];

    return queryInterface.bulkInsert('usuarios', datosUsuarios, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};