let book = [{
    title: "Summer",
    pages: 200,
    year: 2017,
    publisher: "penguin"
}, {
    title: "Winter",
    pages: 200,
    year: 2018,
    publisher: "penguin"
}, {
    title: "Rainy",
    pages: 200,
    year: 2019,
    publisher: "penguin"
}];

// Add 10 to each year
// Get Values with Even Years

var abc = book.map(function (data) {
    var newObject = {
        ...data,
        year: data.year + 10
    }
    return newObject
})

var bbc = abc.filter(function (item) {
    return item.year % 2 == 0
});

var abc = book.map(function (data) {
    var newObject = {
        ...data,
        year: data.year + 10
    }
    return newObject
}).filter(function (item) {
    return item.year % 2 == 0
});

var abc = book.map(function (data) {
    data.year = data.year + 50
    return data;
}).filter(function (item) {
    return item.year % 2 == 0
});

book = book.map(function (item) {
    item.year = item.year + 10;
    return item;
});
console.log(book);

book = book.filter(function (item) {
    if (item.year % 2 === 0)
        return item;
})
console.log(book);