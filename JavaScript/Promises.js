// 2 Parties are required - Maker & Observer
// Keep Promise / Break Promise / Forget about the Promise (Dont Care)
// Something to be accomplished in Future - Future Activity
// Reaction on the basis or Failure / Success (2nd Party) -  Callback Function Function

var delayedExecution = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("Failed to Execute Promise")
    }, 10000);
});

delayedExecution.then(function sucess(data) {
    console.log(data)
}, function failure(data) {
    console.log(data)
})

const promise1 = Promise.reject(3);
const promise2 = Promise.resolve(45);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Failed to Execute Promise")
    }, 10000);
});

Promise.any([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});