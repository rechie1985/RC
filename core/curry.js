define(function(){
  function curry(func){
    return function(){
      var tmp = [];
      tmp.push(arguments[0]);
      if(arguments.length === 1) {
        return function() {
          var args1 = [].slice.call(arguments);
          var innerTmp = tmp.concat(args1);
          console.log(func.name)
          console.log(func.length, innerTmp.length);
          console.log(args1)
          if(func.length < innerTmp.length || func.length === innerTmp.length) {
            return func.apply(this, innerTmp);
          } else {
            console.log('return callee')
            return arguments.callee.bind(args1);
          }
        };
      } else {
        return func.apply(this, arguments);
      }
    };
  }
  return curry;
});
