//resoving the callback hell issue  using promise 

let mypromise = new Promise(function (resolve, reject) {
    resolve(3);
});

mypromise.then(add).then(subtract).then(multiply).then((msg) => {
    console.log('output: ' + msg);
}).catch((err) => {
    console.log(err);
});

function add(val) {
    return (val + 10);
}

function subtract(val) {
    return (val - 10);
}

function multiply(val) {
    return (val * 10);
}
