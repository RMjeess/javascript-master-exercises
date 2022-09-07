function removeFromFrontOfNew(arr) {
    arr.shift();
    return arr
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); 
console.log(arr);