'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'restaurant',
      'password_hash', {
        type: Sequelize.STRING,
        allowNull: false,
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('restaurant');
  }
};