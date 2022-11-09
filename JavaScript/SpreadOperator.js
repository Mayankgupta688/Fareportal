var arrayData = [10, 20, 30, 40, 53];
var copiedData = [...arrayData];
console.log(arrayData)
console.log(...arrayData)

var copiedData1 = arrayData.filter(item => item % 2 === 0);
var copiedData2 = arrayData.map(item => item + 10);

var newArray = [];
for (var i = 0; i < arrayData.length; i++) {
    newArray.push(arrayData[i] + 10)
}

console.log(newArray)

var filterArray = [];
for (var i = 0; i < arrayData.length; i++) {
    if (arrayData[i] % 2 == 0) {
        filterArray.push(arrayData[i])
    }
}

console.log(filterArray);

var arrayData = arrayData.map(function (item) {
    return item + 10;
});

for (var i = 0; i < arrayData.length; i++) {
    arrayData[i] = arrayData[i] + 10;
}

var filteredDataMap = arrayData.filter(function (item) {
    return item % 2 == 0;
});

// filteredDataMap [10, 20, 30, 40]

// 70 =  Add Value
arrayData.push(70)

// More Efficient for JavaScript (Immutability)
arrayData = [...arrayData, 70]

// Immutability in Javascript (functional program)
// Pure Function
// Higher Order Function
// Focus on What, rather than how