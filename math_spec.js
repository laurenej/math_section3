// tell jasmine where to find our code (.. means the parent directory, of math)
var Math1 = require('../math')

describe("A program that does basic arithmetic", function() {
	it("can add two numbers together", function() {
		expect(Math1.add(3,5)), toBe(8);
	});
});

var exports = module.exports = {}