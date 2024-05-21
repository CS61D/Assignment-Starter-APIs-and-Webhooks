import { Octokit } from "octokit";
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

// Pull request type definition from the GitHub API
type PR = GetResponseDataTypeFromEndpointMethod<
  Octokit["rest"]["pulls"]["list"]
>[number];

// Get all open PRs for the repo
export const getPRs = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}): Promise<PR[]> => {
  // Define the octokit client
  const octokit = new Octokit({
    auth: Bun.env.GITHUB_TOKEN,
  });

  // TODO: Get all PRs for the repo

  return [];
};
// Test by running > bun run scripts/getPRs.ts
console.log(
  await getPRs({
    owner: "CS61D",
    repo: "Your-Repo-Name",
  })
);
