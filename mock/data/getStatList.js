const Mock = require("mockjs");
const Random = Mock.Random;
const getComponentList = require("./getComponentList");

function getStatList(len = 10) {
  const res = [];
  const componentList = getComponentList();

  for (let i = 0; i < len; i++) {
    const stat = {
      _id: Random.id(),
    };

    componentList.forEach((c) => {
      const { fe_id, type, props } = c;
      switch (type) {
        case "questionInput":
          stat[fe_id] = Random.ctitle();
          break;
        case "questionTextarea":
          stat[fe_id] = Random.ctitle();
          break;
        case "questionRadio":
          stat[fe_id] = props.options[0].value;
          break;
        case "questionCheckbox":
          stat[fe_id] = `${props.list[0].value}, ${props.list[1].value}`;
          break;
      }
    });

    res.push(stat);
  }
  return res;
}

module.exports = getStatList;
