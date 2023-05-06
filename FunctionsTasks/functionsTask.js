// Task 01 Function to check is current year a leap year
function isCurrentYearLeap() {
    var currentYear = new Date().getFullYear();
    var leap = new Date(currentYear, 1, 29).getDate() === 29
    if (leap) {
        console.log("Current is year is a leap year")
    }else {
        console.log("Current is year is not leap year")
    }
}

isCurrentYearLeap()



// Task 02 Function to check next 10 leap years
function checkNextLeapTenYears() {
    var currentYear = new Date().getFullYear()
    for (var i = currentYear + 1; i <= currentYear + 10; i++) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
            console.log(`${i} is a leap year`);
        } else {
            console.log(`${i} is not a leap year`);
        }
    }
}

checkNextLeapTenYears()


// Task 03 Function to generate OTP
function generateOTP() {
    var digits = '0123456789';
    var OTP = '';
    for (var i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * digits.length)];
    }
    return OTP;
}


console.log(generateOTP())

// Task 04 Function to Calculate Age
function calculateAge(DOB) {
    var birthDate = new Date(DOB)
    var age = new Date().getFullYear() - birthDate.getFullYear()
    console.log(Math.floor(new Date(age)))
}

calculateAge("2001-07-11")

