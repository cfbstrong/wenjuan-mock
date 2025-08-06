const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");
const Random = Mock.Random;

module.exports = [
  {
    //获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        // msg: "出错了",
        data: {
          id: Random.id(),
          titlt: Random.ctitle(),
        },
      };
    },
  },
  {
    //创建问卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  //获取（查询）问卷列表
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      // console.log(ctx.url);
      // console.log(ctx.query);
      const { url = "", query = {} } = ctx;
      const isDeleted = url.includes("isDeleted=true");
      const isStar = url.includes("isStar=true");

      const pageSize = parseInt(query.pageSize) || 10;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar, len: pageSize }), //当前页
          total: 100, //总条数，用于分页
        },
      };
    },
  },
  {
    //更新问卷
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  {
    //复制问卷
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    //批量彻底删除问卷
    url: "/api/question",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
