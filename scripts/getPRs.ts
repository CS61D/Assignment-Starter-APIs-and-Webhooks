import { Octokit } from "octokit";
import type { PR } from "../types";

// Get all open PRs for the repo
export const getPR = async ({
  owner,
  repo,
  pr,
}: {
  owner: string;
  repo: string;
  pr: number;
}): Promise<PR> => {
  // Define the octokit client
  const octokit = new Octokit({
    auth: Bun.env.GITHUB_TOKEN,
  });

  // TODO: Get all PRs for the repo

  return null;
};
// Test by running > bun run scripts/getPRs.ts
console.log(
  await getPR({
    owner: "CS61D",
    repo: "Your-Repo-Name",
    pr: 1,
  })
);
