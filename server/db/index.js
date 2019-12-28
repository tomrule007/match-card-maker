const { Client } = require('pg');

const logger = require('../lib/logger');
const config = require('../config/db');

class Database {
  #client

  constructor() {
    this.#client = new Client(config);
    logger.log(`Starting database connection on ${config.database}:${config.port}`);
  }

  async query(text, params) {
    return this.#client.query(text, params);
  }
}

module.exports = new Database();
