// Provide ability to handle a different logging library at some point
/* eslint-disable no-console */

const log = (...args) => {
  if (args.length > 0) console.log(...args);
};

module.exports = {
  log,
};
