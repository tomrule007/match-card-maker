const path = require('path');

const apiRoutes = require('./api');
const authRoutes = require('./auth');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  app.use('/api', apiRoutes);
  app.use('/auth', authRoutes);
};
