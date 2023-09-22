/**
* Contructing a promise using Promise syntax and Resolve and reject syntax
*/

const myPromise= new Promise((resolve, reject) => {
    // generate a number between 0 and 1
    let num = Math.random();
    if (num < .5 ){
      resolve(`Generated ${num} \n This is less than 0.5 Yay!!!`);
    } else {
      reject(`Ohhh noooo!, we generated ${num}`);
    }
  });
  

/**
* Consumimg the promise
*
* .then() is then used for a successful response
* 
* We use use .Catch() for errors or failures
* 
*/

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
