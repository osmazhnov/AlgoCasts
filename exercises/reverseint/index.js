// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = n < 0;
    let num = n;
    if(sign){
        num = -num;
    }
    const reducer = (result, char) => char + result;
    const arr = ('' + num).split('').reduce(reducer, '');

    return sign ? -1 * Number(arr) : Number(arr);
}

module.exports = reverseInt;
