function addProperty(myObj_parameter, i) {
  myObj_parameter[i] = true;
  return myObj_parameter;
}

var myObj = {};
addProperty(myObj,'myProperty');
console.log(myObj.myProperty);

