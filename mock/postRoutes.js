const mapPostRoutes = require('./postData/index.js');
module.exports = function(url) {
  let responseData = mapPostRoutes[url];
  if (!responseData) {
    responseData = null;
  }
  
  return responseData;
}