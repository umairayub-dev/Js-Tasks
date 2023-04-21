// arrays for contact names and contact numbers
var contactNames = []
var contactNumbers = []

// Ask user to enter contact name and numbers using prompt inside a for-loop
for (let index = 0; index < 3; index++) {
  var contactNumber = +prompt("Please enter contact number "+(index+1))
  var contactName = prompt("Please enter contact name: "+(index+1))
  contactNames.push(contactName)
  contactNumbers.push(contactNumber)
}

// display contact list using for-loop
for (let index = 0; index < contactNames.length; index++) {
  console.log("Contact " + (index+1) + ": " + contactNumbers[index] + " - " + contactNames[index])
}