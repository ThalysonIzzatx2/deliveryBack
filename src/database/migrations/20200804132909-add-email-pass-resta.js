'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'restaurant',
      'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('restaurant');
  }
};