const Router = require('@koa/router');
const OrdersService = require('../services/Orders')();

const router = new Router();

router.post('/', async (ctx) => {
  const result = await OrdersService.add(ctx.request.body);

  ctx.body = result;
});

module.exports = router;
