const fs = require("fs");

// Reading user.json file
const users = require("./user.json");

// Defining new user
let user1 =     {
    "firstname":"new user",
    "lastname":"xyz",
    "gender":" Male",
    "language": ["java","python"]
};
 users.push(user1);

 fs.writeFile("user.json", JSON.stringify(users),error => {
      //Checking for errors
    if (error) throw error; 
   console.log("Done writing"); // Success
});


