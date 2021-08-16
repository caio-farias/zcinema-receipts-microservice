
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'receipts',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        sale_info: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        card_info: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        booking_info: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    ); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receipts');
  }
};