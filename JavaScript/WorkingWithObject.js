let book = {
    title: "Summer",
    pages: 200,
    year: 2017,
    publisher: "penguin"
};

const con = {
    name: "pi",
    value: 3.14
}

let obj = [{
    name: "japneet",
    age: 22
}, {
    name: "abc",
    age: 23
}];

book.title = "Winters";

var copyBook = {
    ...book,
    title: "Winters",
    name: "TechnoFunnel",
    year: 4000
};

console.log(copyBook.name)