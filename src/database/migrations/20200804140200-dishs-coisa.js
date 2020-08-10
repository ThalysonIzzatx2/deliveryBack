'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'dishs',
      'restaurant_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'restaurant', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('dishs', 'restaurant_id');
  }
};