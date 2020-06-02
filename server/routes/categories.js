const Router = require('@koa/router');
const CategoriesService = require('../services/Categories')();

const router = new Router();

router.get('/', async (ctx) => {
  const result = await CategoriesService.getCategories();

  ctx.body = result;
});

module.exports = router;
