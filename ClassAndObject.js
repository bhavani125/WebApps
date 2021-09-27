//declaring class
class User {
    //creating constructor method
    constructor(firstname,lastname,score){
        this.firstname=firstname;
        this.lastname=lastname;
        this.score=score;
    }
   //creating method
    getFullName() {
        let fullName = `${this.firstname} ${this.lastname} is my full name`;
        return fullName;
    }
}
//creating an object using the className
const bhavani =new User("Bhavani","Girineni",67);
console.log(bhavani);
const laxmi = new User("Laxmi", "Gurrala", 80);
console.log(laxmi);

//calling getFullName Method here
console.log(bhavani.getFullName());
