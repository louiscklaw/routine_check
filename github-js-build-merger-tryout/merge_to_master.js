import child_process from 'node:child_process';

console.log(process.env);
const WORKING_DIR = process.env.GITHUB_WORKSPACE;
// const WORKING_DIR = 'c:\\temp\\3';

const result = child_process.execSync('cd', { encoding: 'utf8', cwd: WORKING_DIR });

const checkoutBranch = async (branchName) => {
  return child_process.execSync(`git checkout ${branchName}`, { encoding: 'utf8', cwd: WORKING_DIR });
};

const mergeBranch = async (branchToMerge) => {
  return child_process.execSync(`git merge ${branchToMerge} --ff-only`, { encoding: 'utf8', cwd: WORKING_DIR });
};

const checkBranchName = async () => {
  let temp = await child_process.execSync(`git branch`, { encoding: 'utf8', cwd: WORKING_DIR });
  return temp.match(/\* (.*)/)[1];
};

const checkIfTestBranch = (name_to_test) => name_to_test.match(/test.*/)?.length > 0;

const pushBranch = async () => {
  let temp = await child_process.execSync(`git push`, { encoding: 'utf8', cwd: WORKING_DIR });
  return temp;
};

const switchBranch = async (branch) => {
  let temp = await child_process.execSync(`git switch ${branch}`, { encoding: 'utf8', cwd: WORKING_DIR });
  return temp;
};

// console.log({ result });

// console.log(current_branch);

console.log('merge branch start');

let current_branch = await checkBranchName();

if (checkIfTestBranch(current_branch)) {
  console.log('current branch is test branch, starting merge');
  // perform merge
  await checkoutBranch('master');
  await mergeBranch(current_branch);
  await pushBranch();

  await checkoutBranch(current_branch);
} else {
  console.log('current branch is not test branch, doing nothing');
}

console.log('merge branch done');
