import { Octokit } from "octokit";
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

// Pull request type definition from the GitHub API
export type PR = GetResponseDataTypeFromEndpointMethod<
  Octokit["rest"]["pulls"]["get"]
>;