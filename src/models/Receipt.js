const { Model, DataTypes } = require('sequelize')

class Receipt extends Model {
  static associate(models){
    this.belongsTo(models.User, { 
      foreignKey: 'user_id', 
      as: 'user-receipt',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  static init(connection){
    super.init({
      card_info: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      sale_info:{
        type: DataTypes.JSON,
        allowNull: false,
      },
      booking_info: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    }
    ,{
      modelName: 'Receipt',
      sequelize: connection,
    })
  }
}

module.exports = Receipt