define(['Algorithm'], function(Algorithm) {
	describe("A suite of Algorithm functions", function() {
	    it("findNear in array",function(){
	    	var arr = [1,2,3, 99921, 99999];
	    	Algorithm.findNear(arr, 0, arr.length-1, 99978)
	        expect(99999).toEqual(arr[0]);
	    });
	    it("bubble", function(){
	    	var arr = [1, 99999, 3, 99921, 2];
	    	Algorithm.bubble(arr);
	    	expect([1,2,3, 99921, 99999]).toEqual(arr);
	    });
	    it("quicksort", function(){
	    	var arr = [1, 99999, 3, 99921, 2];
	    	Algorithm.quicksort(arr, 0, arr.length-1);
	    	expect([1,2,3, 99921, 99999]).toEqual(arr);
	    });
	});
});