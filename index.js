const koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index.js");

const app = new koa();
const router = new Router();

function getRes(fn, ctx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn(ctx));
    }, 2000);
  });
}

mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    ctx.body = await getRes(response, ctx);
  });
});

app.use(router.routes());

app.listen(3001, () => {});
