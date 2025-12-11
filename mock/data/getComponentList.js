const Mock = require("mockjs");
const Random = Mock.Random;

function getComponentList() {
  return [
    {
      fe_id: "c1",
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
      fe_id: "c2",
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
            value: "item1",
            label: "选项1",
          },
          {
            value: "item2",
            label: "选项2",
          },
          {
            value: "item3",
            label: "选项3",
          },
        ],
      },
    },
    // Title
    {
      fe_id: "c3",
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
      fe_id: "c4",
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
      fe_id: "c5",
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
      fe_id: "c6",
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
      fe_id: "c7",
      type: "questionTextarea", //不能重复，前后端统一好
      title: "多行输入1",
      isHidden: false,
      isLocked: false,
      props: {
        title: "多行输入标题111", //目前是默认，一旦前端修改了属性，就会发送请求保存到服务器上，后面服务器返回的就是客户自定义的内容了
        placeholder: "请输入内容111",
      },
    },
  ];
}

module.exports = getComponentList;
