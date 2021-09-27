let myPromise = new Promise((resolve, reject) => {
    const result = Math.random();
    if (result <= 0.5) {
      resolve('Success');
    } else {
      reject('Failed');
    }
  });
  
  myPromise.then((message) => {
    console.log('This is in the then block ' + message);
  }).catch((message) => {
    console.log('This is in the catch block' + message);
  });
