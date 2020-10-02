
exports.min = function min (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
   return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  } else {
   return Math.max( ...array );
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) {
    return 0;
  }
  var result = array.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  return result/array.length;
}
