'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dispositivos_electronicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      descripcion: {
        type: Sequelize.STRING(50),
      },

      cantidad: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      fecha_adquisicion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
      },

      id_descripcion_dispositivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "descripciones_dispositivos",
          key: "id",
        },
      },

      descripcion_dispositivo: {
        type: Sequelize.STRING(50),
      },

      id_estado_dispositivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "estados_dispositivos",
          key: "id",
        },
      },

      estado_dispositivo: {
        type: Sequelize.STRING(50),
      },

      activo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },

      creado_por: {
        type: Sequelize.STRING(50),
      },

      fecha_creacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
      },

      modificado_por: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('dispositivos_electronicos');
  }
};