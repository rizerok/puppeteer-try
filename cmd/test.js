const util = require('util');
const exec = util.promisify(require('child_process').exec);

const neededBranch = 'master';

const execWithConsole = async (command) => {
  const {stdout, stderr} = await exec(command);
  console.log(stdout, stderr);
  return stdout || stderr;
};


const run = async () => {
  //await execWithConsole('git fetch');
  //await execWithConsole('git pull');
  let branch = await execWithConsole('git branch');
  branch = branch.match(/\*\s(\w+)/)[1];
  console.log(`current branch - ${branch}`);
  // if(branch !== neededBranch){
  //   await execWithConsole(`git checkout ${neededBranch}`);
  // }
  await execWithConsole('git add .');
  await execWithConsole('git commit -m "new commit"');
  await execWithConsole('git push');
};

run();