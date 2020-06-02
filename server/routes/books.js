const Router = require('@koa/router');
const BooksService = require('../services/Books')();

const router = new Router();

router.get('/', async (ctx) => {
  const {
    _limit, _page = 1, category, title_like,
  } = ctx.query;

  const categories = Array.isArray(category) ? category : [category];
  const query = BooksService.getWithCategories();

  let count = await BooksService.getBooksLength(query);

  if (categories[0]) {
    BooksService.getCategories(categories, query);
    count = await BooksService.getBooksLength(query);
  }

  if (title_like) {
    BooksService.searchByTitle(title_like, query);
    count = await BooksService.getBooksLength(query);
  }

  if (_limit && _page) {
    BooksService.getWithPagination(_page, _limit, query);
  }

  ctx.set('X-Total-Count', count);
  ctx.body = await query;
});

router.post('/', async (ctx) => {
  const result = await BooksService.add(ctx.request.body);

  ctx.body = `Book was added with id ${result.id}`;
});

router.param('id', async (id, ctx, next) => {
  const query = BooksService.getById(id);
  ctx.product = await query;

  return next();
});

router.get('/ids', async (ctx) => {
  const { id } = ctx.query;

  const ids = Array.isArray(id) ? id : [id];
  const result = await BooksService.getIds(ids);

  ctx.set('X-Total-Count', result.length);
  ctx.body = result;
});

router.get('/:id(\\d+)', async (ctx) => {
  ctx.body = ctx.product;
});

router.put('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;

  const result = await BooksService.updateById(id, ctx.request.body);

  ctx.assert(result, 404, `Book with id ${id} wasn't updated`);
  ctx.body = `Book with id ${id} was updated`;
});

router.delete('/:id(\\d+)', async (ctx) => {
  const { id } = ctx.params;
  const result = await BooksService.deleteById(id);

  ctx.assert(result, 404, `Book with id ${id} wasn't deleted`);
  ctx.body = `Book with id ${id} was deleted`;
});

module.exports = router;
