const os = require('os');
function getContainerId() {
  return process.env.CONTAINER_ID || os.hostname();
}
module.exports = { getContainerId };