
module.exports = {
  user: process.env.DB_USER || 'matchcardmaker',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'matchcardmaker',
  password: process.env.DB_PASS || '',
  port: process.env.DB_PORT || 5432,
};
