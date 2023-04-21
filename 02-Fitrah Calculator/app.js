var familyMembers = +prompt("Enter the total number of family members:")

var method = +prompt("Choose a fitrah method: \n (1): Wheat - 320 \n (2): Barley - 480 \n (3): Dates - 2800 \n (4): Raisins - 4000")

var price, selectedMethod;

if (method === 1) {
    selectedMethod = "Wheat"
    price = 320
}else if (method === 2) {
    selectedMethod = "Barley"
    price = 480
}else if (method === 3) {
    selectedMethod = "Dates"
    price = 2800
}else if (method === 4) {
    selectedMethod = "Raisins"
    price = 4000
}else {
    alert('Invalid input. Please choose a valid Fitrah method.')
}

var fitrahAmount = price * familyMembers

alert("The Fitrah amount for " + familyMembers + " family members using " + selectedMethod + " method is Rupees " + fitrahAmount)