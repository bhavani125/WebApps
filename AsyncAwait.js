//program using async /await

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 3000); 
});

// async function
async function asyncFunc() {

    //it wait until the promise resolves (await is used only inside the async function )
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();
