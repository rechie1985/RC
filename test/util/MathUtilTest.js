define(['MathUtil'], function(MathUtil) {
	describe("A suite of MathUtil functions", function() {
	    it('acc mult', function() {
	    	var num1 = 35;
	    	var num2 = 0.01;
	    	var result = MathUtil.accMu(num1, num2);
	    	expect(result).toEqual(0.35);
	    });
	});
});