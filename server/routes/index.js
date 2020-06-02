const Router = require('@koa/router');

const books = require('./books');
const orders = require('./orders');
const categories = require('./categories');
const auth = require('./auth');

const router = new Router();

router.prefix('/api');

router.use('/books', books.routes());
router.use('/orders', orders.routes());
router.use('/categories', categories.routes());
router.use('/auth', auth.routes());

module.exports = router;
