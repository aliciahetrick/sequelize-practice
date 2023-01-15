'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cars.hasOne(models.User, {
        foreignKey: 'id',
        as: 'user',
      })
    }
  }
  Cars.init(
    {
      color: DataTypes.STRING,
      name: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      sequelize,
      modelName: 'Cars',
    }
  )
  return Cars
}
