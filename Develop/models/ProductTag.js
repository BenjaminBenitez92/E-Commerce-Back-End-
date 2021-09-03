const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTGER,
      allowNull: false,
      primayKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTGER,
      references: {
        model: 'Product',
        key: 'id',
      }
    },
    tag_id: {
      type: DataTypes.INTGER,
      references: {
        model: 'Tag',
        key: 'id',
        unique: false
      }

    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
