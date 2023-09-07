'use strict';

const { Model } = require('sequelize');
//const ModeloBase = require('./modeloBase');
const DescripcionesDispositivos = require('./descripcionesDispositivos');
const DescripcionesDispositivos = require('./estadosDispositivos');

module.exports = (sequelize, DataTypes, Deferrable) => {
//  class Usuario extends ModeloBase {
  class DispositivoElectronisco extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      static associate(models) {
        // define association here
        DispositivoElectronisco.belongsTo(models.DescripconDispositivo, { foreignKey: "id_descripcion_dispositivo" });

        DispositivoElectronisco.belongsTo(models.EstadoDispositivo, { foreignKey: "id_estado_dispositivo" });
      }
  }
  
  // Inicializar la clase base
  //super.initModeloBase(sequelize);

  DispositivoElectronisco.init({
    id:  DataTypes.INTEGER,

    descripcion: DataTypes.STRING,

    cantidad:  DataTypes.INTEGER,

    fecha_adquisicion: DataTypes.DATE,

    id_descripcion_dispositivo: {
      type: DataTypes.INTEGER,
  
      references: {
        // Se toma de la ayuda de Sequelize
        // This is a reference to another model
        model: DescripcionDispositivo,
  
        // This is the column name of the referenced model
        key: 'id',
  
        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      }
    },
    
    descripcion_dispositivo:  DataTypes.STRING,

    id_estado_dispositivo: {
      type: DataTypes.INTEGER,
  
      references: {
        // Se toma de la ayuda de Sequelize
        // This is a reference to another model
        model: EstadoDispositivo,
  
        // This is the column name of the referenced model
        key: 'id',
  
        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      }
    },
    
    estado_dispositivo:  DataTypes.STRING,

    activo: DataTypes.INTEGER,

    creado_por:  DataTypes.STRING,

    fecha_creacion: DataTypes.DATE,

    modificado_por:  DataTypes.STRING,

    fecha_modificacion: DataTypes.DATE,
   }, {
    sequelize,
    modelName: 'DispositivoElectronisco',
  });

  return DispositivoElectronisco;
};