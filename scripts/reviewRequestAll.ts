import { Octokit } from "octokit";
import { getPRs } from "./getPRs";
import { requestReview } from "./reviewAndComment";

const reviewRequestAll = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const prs = await getPRs({
    owner: owner,
    repo: repo,
  });

  prs.forEach((pr) => {
    requestReview({ username: Bun.env.GITHUB_USERNAME, pr: pr });
  });
};

console.log(
  await reviewRequestAll({
    owner: "CS61D",
    repo: "YourRepoNameHere",
  })
);
