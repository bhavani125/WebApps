//Closure 
function buildName(name) { 
    var greeting = "Hello,"+ name ; 

    var sayName = function() {
        var welcome = greeting + " Welcome!";
        console.log(welcome); 
    };
    return sayName; 
}

var sayMyName = buildName("Bhavani");

sayMyName();  //Hello,Bhavani Welcome!
