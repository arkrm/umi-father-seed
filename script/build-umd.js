const fs = require('fs-extra');
const util = require('util');
const { exec } = require('child_process');
const { getRelativePath } = require('./util');

const execSync = util.promisify(exec);

const build = async () => {
  console.info('Build umd');
  await execSync('father-build');
  await fs.removeSync(getRelativePath('../dist/entry.js'));
  await fs.removeSync(getRelativePath('../dist/entry.min.js'));
  await fs.moveSync(getRelativePath('../dist/entry.css'), getRelativePath('../dist/index.css'));
  await fs.moveSync(getRelativePath('../dist/entry.min.css'), getRelativePath('../dist/index.min.css'));
};

build();
