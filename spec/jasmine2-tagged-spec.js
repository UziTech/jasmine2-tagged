"use strict";

require("../src/jasmine2-tagged");

var env = jasmine.getEnv();
env.setIncludedTags(["tagged", "tags"]);
env.includeSpecsWithoutTags(false);

var ran = jasmine.createSpy();

describe("jasmine-tagged", function () {
	it("is #tagged", function () {
		expect(true).toBe(true);
		ran();
	});

	it("has #multiple #tags", function () {
		expect(true).toBe(true);
		ran();
	});

	describe("pending", function () {
		it("should #not run", function () {
			fail();
		});

		it("has no tags", function () {
			fail();
		});
	});

	env.includeSpecsWithoutTags(true);

	describe("including specs without tags", function () {
		it("has no tags", function () {
			expect(true).toBe(true);
			ran();
		});

		it("still does #not run other tags", function () {
			fail();
		});
	});

	describe("describe #with tags", function () {
		it("should not run this test", function () {
			fail();
		});
	});

	it("should run all passing tests", function () {
		expect(ran).toHaveBeenCalledTimes(3);
	});
});
