const koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index.js");

const app = new koa();
const router = new Router();

function getRes(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn());
    }, 2000);
  });
}

mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    ctx.body = getRes(response);
  });
});

app.use(router.routes());

app.listen(3001, () => {});
