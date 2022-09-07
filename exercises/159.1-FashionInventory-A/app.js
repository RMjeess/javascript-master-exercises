var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
   
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
console.log(renderInventory(currentInventory))
