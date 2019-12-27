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
}

module.exports = new Database();
