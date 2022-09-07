function isOddLength (word) {
  var num = word.length;
  return (num % 2 == 1); 
}

var output = isOddLength('special');
console.log(output); 