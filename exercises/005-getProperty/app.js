function getProperty(name, i) {
  return name[i];
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output);