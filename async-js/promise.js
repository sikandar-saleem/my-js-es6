// p receive here a promise
let p = new Promise((resolve, reject) => {
  if( 1 > 2){
    resolve('resolved')
  }
  else{
    reject('rejected')
  }
})

p.then((msg) => console.log(`Promise is ${msg}`)).catch((msg) => console.log(`Promise is ${msg}`))


const videoOne = new Promise((resolve, reject) => {
  resolve('Resolved 1');
  // reject('Reject 1 again');
});

const videoTwo = new Promise((resolve, reject) => {
  for(let i = 0; i < 1000000000; i++){ continue }
  // resolve('Resolved 2')
  reject('Reject 2')

})

const videoThree = new Promise((resolve, reject) => {
  // resolve('Resolved 3')
  reject('Rejected 3')
})

// Promise all run all in parrallel and execute when all promise are finished
Promise.all([videoOne, videoTwo, videoThree])
      .then(messages => console.log(messages)) // when all promise are resolved
      .catch((err) => console.log(err) // if any promise is rejected
)

// Promise race execute when first promise is executed
Promise.race([videoOne, videoTwo, videoThree])
      .then(messages => console.log(messages)) // if first promise is resolved
      .catch((err) => console.log(err) // if first promise is rejected
)
