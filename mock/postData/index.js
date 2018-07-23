const wrapper = require('../util/wrapper.js');
const testPostData = require('./testPost.js');

module.exports = {
  '/api/testPostData': wrapper(testPostData),
};