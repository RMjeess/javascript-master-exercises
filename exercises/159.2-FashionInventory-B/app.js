function renderAverageCostPerDesigner(inventory) {

  arr_return = [];

  for (let i = 0; i < inventory.length; i++) {
      for (let x = 0 ; x < inventory[i]['shoes'].length; x++) {
          arr_return.push(
              [inventory[i]['name'],  
              inventory[i]['shoes'][x]['name'], 
              inventory[i]['shoes'][x]['price']
              ]
          )   
      } 
  }
  return arr_return;
  
}

function calculateAverage(array) {
  var total = 0;
  var count = 0;

  array.forEach(function(item, index) {
      total += item;
      count++;
  });

  return total / count;
}

console.log(renderInventory(currentInventory))
