// STRETCH
const cars = [
  {
    vin: '11111111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 21500,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: '22222222222222222',
    make: 'toyota',
    model: 'corola',
    mileage: 36000,
    title: 'salvage',
  },
  {
    vin: '33333333333333333',
    make: 'ford',
    model: 'focus',
    mileage: 41509,
  },
];

exports.seed = async function (knex) {
  await knex('cars').truncate();
  await knex('cars').insert(cars);
};
