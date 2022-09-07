function checkAge(name, age) {
  if (age >= 21) {
    return 'Welcome, ' + name + '!'; 
  } else {
    return 'Go home, ' + name + '!';
  }
}

var output = checkAge('Adrian', 22);
console.log(output);