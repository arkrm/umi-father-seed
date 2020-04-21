const fs = require('fs-extra');
const { getRelativePath } = require('./util');

(async () => {
  await fs.removeSync(getRelativePath('../dist'));
  await fs.removeSync(getRelativePath('../es'));
  await fs.removeSync(getRelativePath('../lib'));
  await fs.removeSync(getRelativePath('../coverage'));
})();
