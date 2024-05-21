import { Octokit } from "octokit";
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { requestReview } from "./scripts/reviewAndComment";

type PR = GetResponseDataTypeFromEndpointMethod<
  Octokit["rest"]["pulls"]["list"]
>[number];

const express = require("express");
const app = express();
const port = 80;

app.post(
  "/",
  express.json({ type: "application/json" }),
  (request: any, response: any) => {
    // Respond to indicate that the delivery was successfully received.
    // Your server should respond with a 2XX response within 10 seconds of receiving a webhook delivery. If your server takes longer than that to respond, then GitHub terminates the connection and considers the delivery a failure.
    response.status(202).send("Accepted");
    console.log("Received a webhook event");
    // Check the `x-github-event` header to learn what event type was sent.
    const githubEvent = request.headers["x-github-event"];

    // Ensure that we are only receiving the events we are interested in (pull request events)
    if (githubEvent === "pull_request") {
      const data = request.body;
      const action = data.action;
      const pr: PR = data.pull_request;
      // Perform our script if the action is "opened" or "reopened"
      if (action === "opened" || action === "reopened") {
        console.log(
          `A pull request was opened or reopened, requesting review for PR: ${pr.number}`
        );
        // TODO: Call the requestReview function on the PR
      } else {
        console.log(`Unhandled action for the pull request event: ${action}`);
      }
    } else {
      console.log(`Unhandled event: ${githubEvent}`);
    }
  }
);

// This starts the server and tells it to listen at the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});