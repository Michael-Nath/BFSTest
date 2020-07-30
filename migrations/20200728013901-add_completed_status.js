"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *s
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.addColumn("Tasks", "completed", {
			type: Sequelize.BOOLEAN,
			// allowNull: false
		});

		// await queryInterface.changeColumn('Tasks', 'completed', {
		//   allowNull: false
		// })
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.removeColumn("Tasks", "completed");
	},
};
