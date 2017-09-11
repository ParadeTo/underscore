/**
 * Created by ayou on 17/9/11.
 */
var restArgs = function(func, startIndex) {
  // func.length 返回函数的参数
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
      rest = Array(length),
      index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    //     switch (startIndex) {
    //       case 0: return func.call(this, rest);
    //       case 1: return func.call(this, arguments[0], rest);
    //       case 2: return func.call(this, arguments[0], arguments[1], rest);
    //     }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
};

var f = restArgs(function(arg1, arg2) {
  console.log(arg1, arg2)
})

f(1,2,3,4)