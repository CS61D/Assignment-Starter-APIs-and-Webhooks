import { Octokit } from "octokit";
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

// Pull request type definition from the GitHub API
type PR = GetResponseDataTypeFromEndpointMethod<
  Octokit["rest"]["pulls"]["list"]
>[number];

// Request review for a PR check that the following are true before requesting a review
// 1. The requested reviewer is not already a reviewer
// 2. The requested reviewer is not the author of the PR
export const requestReview = async ({
  username,
  pr,
}: {
  username: string;
  pr: PR;
}) => {
  // Define the octokit client
  const octokit = new Octokit({
    auth: Bun.env.GITHUB_TOKEN,
  });

  // TODO: 1. Check if the requested reviewer is not already a reviewer
  if (true) {
    console.log("Reviewer already requested for PR number: ", pr.number);
    return;
  }

  // TODO: 2. Ensure the requested reviewer is not the author of the PR
  if (true) {
    console.log(
      "Reviewer is the author of PR number: ",
      pr.number,
      " and cannot review their own PR"
    );
    return;
  }

  console.log("Adding reviewer to PR number: ", pr.number);

  // TODO: Request the expected reviewer to review the PR

  // TODO: Make a comment telling the author good job
};