/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// TODO: Find a proper way to automatically test this action
test("dummy test", () => {
  expect(true).toBeTruthy();
});

/**
 *
 * import * as core from "@actions/core";
 * import * as github from "@actions/github";
 * import { getOctokit } from "@actions/github";
 * import { CommentController } from "../src/comment";
 *
 * // Inputs for mock @actions/core
 * let inputs = {} as any;
 *
 * // Shallow clone original @actions/github context
 * let originalContext = { ...github.context };
 *
 * (getOctokit as jest.Mock<any, any>).mockReturnValue({
 *   rest: {
 *     checks: {
 *       create: (fn: () => any) => {
 *         fn();
 *       },
 *     },
 *   },
 * });
 * describe("comment", () => {
 *   beforeAll(() => {
 *     // Mock getInput
 *     jest.spyOn(core, "getInput").mockImplementation((name: string) => {
 *       return inputs[name];
 *     });
 *     jest.spyOn(core, "getBooleanInput").mockImplementation((name: string) => {
 *       return inputs[name];
 *     });
 *
 *     // Mock error/warning/info/debug
 *     jest.spyOn(core, "error").mockImplementation(jest.fn());
 *     jest.spyOn(core, "warning").mockImplementation(jest.fn());
 *     jest.spyOn(core, "info").mockImplementation(jest.fn());
 *     jest.spyOn(core, "debug").mockImplementation(jest.fn());
 *
 *     // Mock github context
 *     jest.spyOn(github.context, "repo", "get").mockImplementation(() => {
 *       return {
 *         owner: "some-owner",
 *         repo: "some-repo",
 *       };
 *     });
 *     github.context.ref = "refs/heads/some-ref";
 *     github.context.sha = "1234567890123456789012345678901234567890";
 *   });
 *
 *   beforeEach(() => {
 *     // Reset inputs
 *     inputs = {};
 *   });
 *
 *   afterAll(() => {
 *     // Restore @actions/github context
 *     github.context.ref = originalContext.ref;
 *     github.context.sha = originalContext.sha;
 *
 *     // Restore
 *     jest.restoreAllMocks();
 *   });
 *
 *   const defaultInput = {
 *     cdktfVersion: "1.4.0",
 *     terraformVersion: "1.4.0",
 *     workingDirectory: "some-directory",
 *     stackName: "some-stack",
 *     mode: "plan-only",
 *     terraformCloudToken: "xxx",
 *     githubToken: "xxx",
 *     commentOnPr: true,
 *     updateCommentOnPr: true,
 *   };
 *
 *   describe("postCommentOnPr", () => {
 *     it("should skip commenting if commentOnPr is false", async () => {
 *       inputs = defaultInput;
 *       const actual = await postCommentOnPr(defaultInput, "some-message");
 *       expect(actual).toBeUndefined();
 *     });
 *     it("should successfully add new comment if updateCommentOnPr is false", async () => {});
 *     it("should successfully add new comment if updateCommentOnPr is true but no previous comment", async () => {});
 *     it("should successfully add new comment if updateCommentOnPr is true but no previous comment matched with a tag", async () => {});
 *     it("should successfully update comment if updateCommentOnPr is true and previous comment matched with a tag", async () => {});
 *   });
 * });
 * */
