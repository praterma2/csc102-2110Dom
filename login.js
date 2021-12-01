function checkCreds(){
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    console.log("Full name is " + fullName);

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Full Name! Please submit a valid full name.";
    } else if(badgeNumb > 999 || badgeNumb < 0){
        document.getElementById("loginStatus").innerHTML =
            "Invalid Badge Number! Please submit a valid Badge Number";
    } else {
        alert("Welcome, " + fullName);
        location.replace("UATSpacePage.html");
    }

}