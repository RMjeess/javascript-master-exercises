function countCharacter(str, char) {
  return str.split(char).length -1;
}

console.log(countCharacter("This is a string", "i"))