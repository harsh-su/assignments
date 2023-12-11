/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  transactions.forEach(element =>{
      let curr  = element.category;
      let curr_price = element.price;
      let found  = false;

      arr.forEach(cat =>{
        if ( curr == cat.category){
            cat.totalSpent+=curr_price;
            found = true;
            return;            
        }
      })

      if (!found){
        arr.push({category :curr ,totalSpent : curr_price});
      }
    
    
    })

  return arr;
}

    



module.exports = calculateTotalSpentByCategory;
