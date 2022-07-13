"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Matriculas", "deletedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Matriculas", "deletedAt");
  },
};
