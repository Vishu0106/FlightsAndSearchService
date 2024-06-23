'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Indira Gandhi International Airport',
      address: 'New Delhi, Delhi, India',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chhatrapati Shivaji Maharaj International Airport',
      address: 'Mumbai, Maharashtra, India',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kempegowda International Airport',
      address: 'Bengaluru, Karnataka, India',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chennai International Airport',
      address: 'Chennai, Tamil Nadu, India',
      cityId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
