module.exports = [
  //收集问卷
  {
    url: "/api/answer",
    method: "post",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
