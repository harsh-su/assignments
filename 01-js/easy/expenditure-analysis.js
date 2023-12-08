/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
