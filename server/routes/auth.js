const Router = require('@koa/router');
const AuthService = require('../services/Auth')();

const router = new Router();

router.get('/profile', (ctx) => {
  ctx.body = ctx.session.user;
});

router.get('/login', async (ctx) => {
  const { username = '', password = '' } = ctx.query;

  const user = await AuthService.login(username, password);
  const result = { isLogged: false };

  if (ctx.session.user) {
    result.isLogged = true;
  }

  if (user && !ctx.session.user) {
    ctx.session.user = user;
    result.isLogged = true;
  }

  ctx.body = result;
});

router.get('/logout', (ctx) => {
  ctx.session = null;
});

module.exports = router;
