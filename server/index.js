const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const cors = require('@koa/cors');

require('./lib/db');

const path = require('path');

const PORT = 3000;
const DOCUMENT_ROOT = path.join(__dirname, '..', 'group-3', 'build');

const app = new Koa();

const router = require('./routes');

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.type = 'json';
    ctx.status = err.status || 500;
    ctx.body = { status: 'error', message: err.message };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(cors({
  origin: '*',
  exposeHeaders: 'X-Total-Count',
}));

app.keys = ['some secret hurr'];

app.use(session(app));
app.use(bodyParser());
app.use(router.routes());
app.use(serve(DOCUMENT_ROOT));
app.use((ctx) => {
  ctx.redirect('/');
});

app.on('error', (err, ctx) => {
  ctx.body = { message: err.message };
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
