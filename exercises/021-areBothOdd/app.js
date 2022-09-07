function areBothOdd (num1, num2) {
    return (num1 % 2 == 1) && (num2 % 2 == 1); 
}

var output = areBothOdd(1, 3);
console.log(output);