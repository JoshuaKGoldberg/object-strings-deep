import { describe, expect, it } from "vitest";

import { getObjectStringsDeep } from "./index.js";

describe("getObjectStringsDeep", () => {
	it.each([
		[null, []],
		[undefined, []],
		[0, []],
		[1, []],
		[Symbol.for("abc"), []],
		[{}, []],
		["abc", ["abc"]],
		[["abc"], ["abc"]],
		[
			["abc", "def"],
			["abc", "def"],
		],
		[{ abc: 1 }, ["abc"]],
		[{ abc: null }, ["abc"]],
		[{ abc: "def" }, ["abc", "def"]],
		[{ abc: ["def"] }, ["abc", "def"]],
		[{ abc: { def: "ghi" } }, ["abc", "def", "ghi"]],
		[{ abc: { def: "def" } }, ["abc", "def"]],
		[{ abc: { def: "abc" } }, ["abc", "def"]],
		[{ def: { def: "abc" } }, ["def", "abc"]],
		[{ def: { ghi: "abc" } }, ["def", "ghi", "abc"]],
	])("%s", (input, expected) => {
		expect(getObjectStringsDeep(input)).toEqual(expected);
	});
});
