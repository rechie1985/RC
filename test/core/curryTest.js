define(['curry'], function (curry) {
    var match = curry(function (what, str) {
        return str.match(what);
    });

    var replace = curry(function (what, replacement, str) {
        return str.replace(what, replacement);
    });

    var filter = curry(function (f, ary) {
        return ary.filter(f);
    });

    var map = curry(function (f, ary) {
        return ary.map(f);
    });
    describe('curry test', function () {
        it('match', function () {
            var hasSpaces = match(/\s+/g);
            var expectArr = hasSpaces("hello world");
            expect(expectArr).toEqual([' ']);
        });
    });
    describe('curry test', function () {
        it('match 2', function () {
            var expect1 = match(/\s+/g, "hello world");
            expect(expect1).toEqual([' ']);
        });
    });
});
