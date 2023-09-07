'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nombre: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },

      contrasenia: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },

      id_rol: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id",
        },
      },

      descripcion_rol: {
        type: Sequelize.STRING(50),
      },

      activo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      fecha_creacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
      },

      fecha_modificacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onUpdate: Sequelize.DATEONLY,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};