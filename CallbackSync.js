// Callback Function Example
function fruit(name, myFunction) {
    console.log('apple is good');

    // callback function
    // executed only after the fruit() is executed
    myFunction(name);
}

// callback function
function chocolate(name) {
    console.log('I want' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(fruit, 2000, 'KitKat', chocolate);
