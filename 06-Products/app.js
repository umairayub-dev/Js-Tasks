var products = ["(1): Zingerburger","(2): Cheeseburger", "(3): Pizza", "(4): French Fries", "(5): Sandwich", "(6): Soft drink"]

var productPrompt = "Which product do you want? Please enter item number \n"

for (let index = 0; index < products.length; index++) {
  productPrompt += products[index] + "\n"
}
var itemToRemove = +prompt(productPrompt) - 1
console.log("User selected: " + products[itemToRemove])
products = products.slice(0, itemToRemove).concat(products.slice(itemToRemove + 1));
console.log("Remaining products: "+ products.length + "\n" + products )
