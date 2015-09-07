
define(['RC'], function(RC) {
	describe('RC function test', function(){
		it('merge', function(){
			var foo = {
				a: 1,
				b: 3
			};
			var bar = {
				c: 10,
				d: 21
			};
			var expectObj = {
				a: 1,
				b: 3,
				c: 10,
				d: 21
			};
			RC.merge(foo, bar);
			expect(expectObj).toEqual(foo);
		});
	});
});
