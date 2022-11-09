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