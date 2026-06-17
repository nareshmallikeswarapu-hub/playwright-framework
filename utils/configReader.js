const fs = require('fs');

function getConfig() {
  const rawData = fs.readFileSync('./config/qa.json');
  return JSON.parse(rawData);
}

module.exports = { getConfig };