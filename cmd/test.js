const util = require('util');
const exec = util.promisify(require('child_process').exec);

const run = async () =>{
  let obj = await exec('dir');
  console.log('stdout:', obj.stdout);
  obj = await exec('echo 456');
  console.log('stdout:', obj.stdout);
};

run();