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
          //组件列表
          componentList: [
            {
              fe_id: Random.id(),
              type: "questionInfo", //不能重复，前后端统一好
              title: "问卷描述",
              isHidden: false,
              isLocked: false,
              props: {
                title: "问卷标题", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
                description: "这是一个问卷信息",
              },
            },
            {
              fe_id: Random.id(),
              type: "questionRadio",
              title: "单选标题",
              isHidden: false,
              isLocked: false,
              props: {
                title: "单选标题",
                value: "",
                vertical: false,
                options: [
                  {
                    value: "aa",
                    label: "选项1",
                  },
                  {
                    value: "bb",
                    label: "选项2",
                  },
                  {
                    value: "cc",
                    label: "选项3",
                  },
                ],
              },
            },
            // Title
            {
              fe_id: Random.id(),
              type: "questionTitle", //组件类型 <a/> <div/> <input/>
              title: "标题",
              isHidden: false,
              isLocked: false,
              props: {
                title: "一行标题",
                level: 1,
                isCenter: false,
              },
            },
            // Input
            {
              fe_id: Random.id(),
              type: "questionInput", //不能重复，前后端统一好
              title: "输入框1",
              isHidden: false,
              isLocked: false,
              props: {
                title: "你的电话", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
                placeholder: "请输入电话...",
              },
            },
            {
              fe_id: Random.id(),
              type: "questionInput", //不能重复，前后端统一好
              title: "输入框2",
              isHidden: false,
              isLocked: false,
              props: {
                title: "你的姓名", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
                placeholder: "请输入姓名...",
              },
            },
            {
              fe_id: Random.id(),
              type: "questionPragraph", //不能重复，前后端统一好
              title: "段落",
              isHidden: false,
              isLocked: false,
              props: {
                text: "你的姓名", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
                isCenter: true,
              },
            },
            {
              fe_id: Random.id(),
              type: "questionTextarea", //不能重复，前后端统一好
              title: "问卷描述",
              isHidden: false,
              isLocked: false,
              props: {
                title: "多行输入标题111", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
                placeholder: "请输入内容111",
              },
            },
          ],
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
