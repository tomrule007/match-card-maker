const Router = require('express-promise-router');

const router = new Router();

router.get('/', async (req, res) => {
  res.json({ message: 'You hit the default api route!' });
});

module.exports = router;
