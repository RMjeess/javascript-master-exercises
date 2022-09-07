function removeFromBackOfNew(arr) {
  arr.pop();
  return arr
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output);
console.log(arr);