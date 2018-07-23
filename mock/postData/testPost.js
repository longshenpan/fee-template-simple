const Mock = require('mockjs');
const Random = Mock.Random;
let data = Mock.mock({
  'test|1-10': [{
    'id|+1': 1
  }]
});

module.exports = data;