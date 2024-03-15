'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
      },
      status: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
      },
    },
    {
      sequelize,
      modelName: 'Order',
      underscored: true,
      tableName: 'orders',
    }
  );
  return Order;
};
