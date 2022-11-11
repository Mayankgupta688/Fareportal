let num = Math.floor((Math.random() * 50));

console.log(Math.floor(Math.random() * 51))

function f() {
    let rand = Math.floor(Math.random() * 50);
    console.log(rand)
}

function rand(num) {
    return Math.floor(Math.random() * num + 1)
}

let randomNum = Math.random() * (max - min) + min;

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log((new Date().getMilliseconds() % 51))


var sec = new Date().getTime() / 1000;
console.log(Math.floor(sec % 50))

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (new Date().getMilliseconds() % max) + min;
}