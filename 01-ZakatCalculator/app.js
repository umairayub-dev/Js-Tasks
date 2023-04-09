var zakatPercentage = 0.025
var savings = +prompt("How much money do you have in savings?")
var assets = +prompt("What is the value of your other assets?")
var debt = +prompt("How much debt do you owe?")

var totalWealth = (savings + assets) - debt
var zakatAmount = totalWealth * zakatPercentage

alert("Your total Wealth is " + totalWealth + ", Your Zakat Amount is " + zakatAmount)