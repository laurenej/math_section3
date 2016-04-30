// tell jasmine where to find our code (.. means the parent directory, of math)
var math = require('../math');

describe("A program that does basic arithmetic", function() {
	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
	});

	it("can subtract two numbers", function() {
		expect(math.subtract(3,5)).toBe(-2);
	});

});
