const child_process = require('child_process');

const fs = require('fs');
const path = require('path');
const CWD = path.resolve(__dirname);
const PROJ_ROOT = path.dirname(CWD);

console.log('helloworld');

fs.readdirSync('.').forEach((root_dirs) => {
  // console.log(dirs)
  // console.log(PROJ_ROOT);

  try {
    // console.log({ root_dirs });
    let res = child_process.execSync('rm -rf node_modules', { cwd: PROJ_ROOT + '/' + root_dirs });
  } catch (error) {
    console.log(error);
  }
});
