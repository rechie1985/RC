define(function(){

  function curry(func) {
      function innerCall() {
        var tmp = [];
        var args1 = [].slice.call(arguments);
        var innerTmp = tmp.concat(args1);
        // 如果临时参数长度大于等于已需参数长度，则执行，否则继续返回callee并拼接
        if(func.length < innerTmp.length || func.length === innerTmp.length) {
          return func.apply(this, innerTmp);
        } else {
          return function() {
            var tmpArgs = [].slice.call(arguments);
            return innerCall.apply(this, innerTmp.concat(tmpArgs));
          }
        }
      }
      return innerCall;
  }
  return curry;
});
