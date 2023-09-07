'use strict';

const { Model } = require('sequelize');
//const ModeloBase = require('./modeloBase');
const ModeloBase = require('./rol');

module.exports = (sequelize, DataTypes, Deferrable) => {
//  class Usuario extends ModeloBase {
  class Usuario extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      static associate(models) {
        // define association here
        Usuario.belongsTo(models.rol, { foreignKey: "id_rol" });
      }
  }
  
  // Inicializar la clase base
  //super.initModeloBase(sequelize);

  Usuario.init({
    id:  DataTypes.INTEGER,

    nombre: DataTypes.STRING,

    contrasenia: DataTypes.STRING,

    email:  DataTypes.STRING,

    id_rol: {
      type: DataTypes.INTEGER,
  
      references: {
        // Se toma de la ayuda de Sequelize
        // This is a reference to another model
        model: Rol,
  
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
    
    descripcion_rol:  DataTypes.STRING,

    activo: DataTypes.INTEGER,

    fecha_creacion: DataTypes.DATE,

    fecha_modificacion: DataTypes.DATE,
   }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};