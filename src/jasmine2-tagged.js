"use strict";

require("./polyfills");

(function (global) {

	if (!global.jasmine) {
		throw new Error("jasmine must be loaded before jasmine2-tagged");
	}

	var env = global.jasmine.getEnv();

	var includeSpecsWithoutTags = true;
	env.includeSpecsWithoutTags = function (permit) {
		includeSpecsWithoutTags = permit;
	};

	var includedTags = [];
	env.setIncludedTags = function (tags) {
		if (!tags) {
			tags = [];
		} else if (!Array.isArray(tags)) {
			tags = [tags.toString()];
		}

		includedTags = tags;
	};

	function findTags(spec) {
		var words = spec.getFullName().split(" ");
		var tags = words.filter(function (word) {
			return word.startsWith("#");
		}).map(function (word) {
			return word.substring(1);
		});
		if (!tags) { tags = []; }

		return tags;
	};

	var originalFilter = (env.specFilter ? env.specFilter : function () { return true; });
	env.specFilter = function (spec) {
		if (!originalFilter(spec)) { return false; }

		var tags = findTags(spec);
		if (includeSpecsWithoutTags && (tags.length === 0)) { return true; }

		return tags.some(function (tag) { return includedTags.includes(tag); });
	};

})(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
