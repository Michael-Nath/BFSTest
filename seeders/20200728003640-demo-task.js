"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let currentDate = new Date();
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert("Tasks", [
			{
				name: "bfs project",
				description: "gotta complete bfs project",
				due_date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("Tasks", null, {});
	},
};
