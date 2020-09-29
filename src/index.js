
exports.min = function min (array) {
  if (array != undefined && array.length > 0){
    return Math.min.apply(Math, array);
  }
  else{
  return 0;
  };
}

exports.max = function max (array) {
  if (array != undefined && array.length > 0){
    return Math.max.apply(Math, array);
  }
  else{
  return 0;
  };
}

exports.avg = function avg (array) {
  let avg;
  let a=0;
  if (array != undefined && array.length > 0){
    for (let i=0; i<array.length; i++){
      a+=array[i];
    }
    avg = a/array.length;
    return avg;
  }
  else{
  return 0;
  };
}
