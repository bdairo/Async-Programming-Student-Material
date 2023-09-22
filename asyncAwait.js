function shopForBeans (){
    return new Promise((resolve, reject) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(()=>{
          let randomIndex = Math.floor(Math.random() * 5);
          let beanType = beanTypes[randomIndex];
          console.log(`I bought ${beanType} beans because they were on sale.`);
         resolve(beanType);
        }, 1000)
      })
}
      
function soakTheBeans (beanType){
    return new Promise((resolve, reject) => {
        console.log('Time to soak the beans.');
        setTimeout(()=>{
        console.log(`... The ${beanType} beans are softened.`);
        resolve(true);
        }, 1000);
    });
}
      
function cookTheBeans(isSoftened){
    return new Promise((resolve, reject) => {
        console.log('Time to cook the beans.');
        setTimeout(()=>{
        if (isSoftened) {
            console.log('... The beans are cooked!');
            resolve('\n\nDinner is served!');
        }
        }, 1000);
    });
}



/**
 * Using .then() and .catch() and Promise chaining
 */

// console.log('Using promises to cook beans... ')
// shopForBeans()
//     .then(soakTheBeans)
//     .then(cookTheBeans)
//     .catch(err => console.error(err));


/**
 * Using Async Await
 */

// async function makeBeans(){
//   console.log('Using async await to cook beans...')
//   try{
//     let beanType = await shopForBeans();
//     let isSoftened = await soakTheBeans(beanType);
//     let dinner = await cookTheBeans(isSoftened);
//     console.log(dinner);
//   }catch(err){
//     console.log(err)
//   }
// }
// makeBeans();