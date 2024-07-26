/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const stickers = require('../stickers');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sticker').del()
  await knex('sticker').insert(stickers);
};
