
exports.min = function min (array) {
    if (array === undefined || array.length === 0  ){
        return 0;
      } else {
        return Math.min.apply(null, array);
      }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0 ){
        return 0;
      } else {
        return Math.max.apply(null, array);
      }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0  ){
    return 0;
  } else {
      let i = 0;
      let sum = 0;
      while (i < array.length) {
          sum += array[i];
          i += 1;
      }
      let result; 
      result = sum / array.length;
      return result;
  }
    
}
