var isEven = (element) => {

    return element % 2 === 0;
};

//console.log(isEven(5));

// var result = [2, 4, 5, 8].every(isEven);
// console.log(result);

var result = [2, 4, 6, 8].every( (e) => e % 2 === 0);
console.log(result);