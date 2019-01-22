// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const half = Math.floor(str.length / 2);
    const isDivBy2 = str.length % 2 === 0;
    const result = [];

    for(let i = 0 ; i < half ; i++){
        result[i] = str[str.length - i - 1];
        result[str.length - i - 1] = str[i];
    }
    if(!isDivBy2){
        result[half] = str[half];
    }

    return result.join('');
}

module.exports = reverse;
