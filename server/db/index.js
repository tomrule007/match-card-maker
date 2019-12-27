const { Client } = require('pg');

const logger = require('../lib/logger');
const config = require('../config/db');

// const processExitEvents = [
//   'exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException',
// ];

class Database {
  #client

  constructor() {
    this.#client = new Client(config);
    logger.log(`Database client connection being created on: ${config.database}:${config.port}`);
  }

  async query(text, params) {
    return this.#client.query(text, params);
  }
}

module.exports = new Database();
