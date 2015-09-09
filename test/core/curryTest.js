define(['curry'], function (curry) {
    var match = curry(function match(what, str) {
        return str.match(what);
    });

    var replace = curry(function replace(what, replacement, str) {
        return str.replace(what, replacement);
    });

    var filter = curry(function filter(f, ary) {
        return ary.filter(f);
    });

    var map = curry(function (f, ary) {
        return ary.map(f);
    });
    describe('curry test', function () {
        //it('match', function () {
        //    var hasSpaces = match(/\s+/g);
        //    var expectArr = hasSpaces("hello world");
        //    expect(expectArr).toEqual([' ']);
        //});
        //it('match 2', function () {
        //    var expect1 = match(/\s+/g, "hello world");
        //    expect(expect1).toEqual([' ']);
        //});
        //it('filter', function(){
        //    var hasSpaces = match(/\s+/g);
        //    var expectObj = filter(hasSpaces, ["tori_spelling", "tori amos"]);
        //    expect(expectObj).toEqual(['tori amos']);
        //});
        //it('findSpace', function(){
        //    var hasSpaces = match(/\s+/g);
        //    var findSpaces = filter(hasSpaces);
        //    var expectObj = findSpaces(["tori_spelling", "tori amos"]);
        //    expect(expectObj).toEqual(['tori amos']);
        //});
        it('censored', function(){
            var noVowels = replace(/[aeiou]/ig);
            var censored = noVowels("*");
            var expectObj = censored("Chocolate Rain");
            expect(expectObj).toEqual('Ch*c*l*t* R**n');
        });
    });
});
