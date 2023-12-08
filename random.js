function numberRandom(minRange, maxRange) {
console.log("🚀 ~ file: numberRandom.js:2 ~ numberRandom ~ maxRange:", maxRange)

console.log("🚀 ~ file: numberRandom.js:2 ~ numberRandom ~ minRange:", minRange)

console.log('numberRandom');
}

function stringRandom() {
    console.log('stringRandom');
}

function arrayRandom () {
    console.log('arrayRandom');
}

function add(...numbers) {
    
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

function add3(a,b) {
    return a+b;
}

// module.exports = add2

module.exports = {
    numberRandom: numberRandom,
    stringRandom: stringRandom,
    arrayRandom: arrayRandom,
    add: add,
    add3: add3
}