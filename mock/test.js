const Mock = require("mockjs");
const Random = Mock.Random;

const mockList = [
  {
    url: "/api/test",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];

module.exports = mockList;
