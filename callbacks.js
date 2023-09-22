

/**
 * setTimeout() function to demonstrate callbacks
 */
// setTimeout(() => {
//     console.log('Delay the printing of this string, please.');
//   }, 1000);
// console.log('Doing important stuff.');
// console.log('Still doing important stuff.');
  
/**
 * setInterval() function to demonstrate callbacks
 */

// setInterval(() => {
//     console.log('Are you paying attention???')
//   }, 3000)
  

/**
 * Synchronous code
 */
// let pizza;
// function orderPizza(){
//     console.log('Order Pizza')
//     setTimeout(() =>{
//         pizza = 'Pepperoni pizza'; // initializing pizza variable
//         console.log(`${pizza} is ready`)
//     }, 4000)
//     console.log('Pizza was ordered')
// }

// function doOtherThings(){
//     console.log('Doing other things');
// }

// orderPizza();
// doOtherThings(); 
// console.log(`${pizza} arrived!, Time to eat!`); // This line also executes immediately.


/**
 * Refactoring with a callback fxn 
 */

// function orderPizza(callback){
//     console.log('Order Pizza')
//     setTimeout(() =>{
//         const pizza = 'Pepperoni pizza'; // initializing pizza variable
//         callback(pizza) // calling the callback fxn 
//     }, 4000)
//     console.log('Pizza was ordered')
// }

// function pizzaReady(pizza){
//     console.log(`Eat the ${pizza}`);
// }

// function doOtherThings(){
//     console.log('Doing other things');
// }

// orderPizza(pizzaReady);
// doOtherThings();


/**
 * Callback hell
 * cooking and making beans
 */
//   function shopForBeans(callback) {
//     const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//     setTimeout(() => {
//       let randomIndex = Math.floor(Math.random() * 5);
//       let beanType = beanTypes[randomIndex];
//       console.log(`I bought ${beanType} beans because they were on sale.`);
//       callback(beanType);
//     }, 1000);
//   }
  
//   function soakTheBeans(beanType, callback) {
//     console.log('Time to soak the beans.');
//     setTimeout(() => {
//       console.log(`... The ${beanType} beans are softened.`);
//       callback(true);
//     }, 1000);
//   }
  
//   function cookTheBeans(isSoftened, callback) {
//     console.log('Time to cook the beans.');
//     setTimeout(() => {
//       if (isSoftened) {
//         console.log('... The beans are cooked!');
//         callback('\n\nDinner is served!');
//       }
//     }, 1000);
//   }
  
  // Example usage of these functions with callbacks
  console.log("using callbacks to cook beans... ")
  shopForBeans((beanType) => {
    soakTheBeans(beanType, (isSoftened) => {
      cookTheBeans(isSoftened, (result) => {
        console.log(result);
      });
    });
  });

  // In this code, each function accepts a callback function as its last argument,
  // and when the asynchronous operation is complete, 
  // it calls the provided callback with the result. 
  //T his creates a callback chain where each function depends on the 
  // result of the previous one.
  