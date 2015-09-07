define(function(){
  function curry(func){
    return function(){
      var args = arguments;
      if(arguments.length === 1) {
        return function() {
          var args1 = Array.prototype.concat.apply([], arguments);
          var args2 = args1.unshift(args[0]);
          return func.apply(this, args1);
        };
      } else {
        return func.apply(this, arguments);
      }
    };
  }
  return curry;
});
