const pokeneas = require('../data/pokeneas');

function getRandomPokenea() {
  return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

module.exports = { getRandomPokenea };