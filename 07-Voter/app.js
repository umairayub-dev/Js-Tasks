var nationality = prompt("Your Nationality?").toLowerCase()

if (nationality == "pakistani" || nationality == "indian") {
    var age = prompt("Your Age?")
    if (age >= 18) {
        //can procced
        var gender = prompt("Your Gender?").toLowerCase()
        if (gender === "male") {
            alert("go to the voting room")
        } else if (gender === "female") {
            var maritalStatus = prompt("Are you married? Yes or No").toLowerCase()
            if (maritalStatus == "yes") {
                alert("go to the voting room")
            } else {
                alert("You're not eligible")
            }
        }
    } else {
        // can"t vote
        alert("You're Underage")
    }
} else {
    alert("You're not eligible")
}


