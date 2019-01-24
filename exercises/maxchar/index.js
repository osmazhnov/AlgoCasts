// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const reduceHandler = (obj, char) => {
        if(obj[char]){
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
        return obj;
    };
    const object = str.split('').reduce(reduceHandler, {});
    let max = str[0];
    const forEachHandler = (key) => {
        if(object[key] > object[max]){
            max = key;
        }
    };
    Object.keys(object).forEach(forEachHandler);

    return max;
}

module.exports = maxChar;
