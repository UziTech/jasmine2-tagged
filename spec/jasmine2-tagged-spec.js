"use strict";
/* globals pass */

require("../src/jasmine2-tagged");

var env = jasmine.getEnv();
env.setIncludedTags(["tagged", "tags"]);
env.includeSpecsWithoutTags(false);

describe("jasmine-tagged", function () {
	it("is #tagged", function () {
		expect(true).toBe(true);
	});

	it("has #multiple #tags", function () {
		expect(true).toBe(true);
	});

	describe("pending", function () {
		it("should #not run", function () {
			fail();
		});

		it("has no tags", function () {
			fail();
		});
	});
});
