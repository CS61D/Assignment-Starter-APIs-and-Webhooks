import { getPR } from "./getPRs";
import { requestReview } from "./reviewAndComment";

const reviewPullRequest = async ({
  owner,
  repo,
  prNumber,
}: {
  owner: string;
  repo: string;
  prNumber: number;
}) => {

  const pr = await getPR({
    owner: owner,
    repo: repo,
    pr: prNumber,
  });

  requestReview({ username: Bun.env.GITHUB_USERNAME as string, pr: pr });
  
};


// Todo fill in your information to test the script
console.log(
  await reviewPullRequest({
    owner: "CS61D",
    repo: "YourRepoNameHere",
    prNumber: 1, // Change this to the PR number you want to test
  })
);
