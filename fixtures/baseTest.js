const base = require('@playwright/test');
const getConfig = require('../utils/configReader');

const config = getConfig();

exports.test = base.test.extend({
  baseURL: async ({}, use) => {
    await use(config.baseURL);
  },
  user: async ({}, use) => {
    await use(config.username);
  },
  password: async ({}, use) => {
    await use(config.password);
  }
});

exports.expect = base.expect;