function isEitherEven(num1, num2) {
    return (
        ((num1 % 2 == 1) || (num2 % 2 == 1))
        && !((num1 % 2 == 1) && (num2 % 2 == 1))
    ); 
}

var output = isEitherEven(1, 4);
console.log(output);