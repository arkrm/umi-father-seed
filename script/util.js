const path = require('path');

const getRelativePath = pathStr => path.join(__dirname, pathStr);

module.exports = { getRelativePath };
