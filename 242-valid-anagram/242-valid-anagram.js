/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let frequency = {};
    for (let item of s.split("")) {
        frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
    }
    for (let item of t.split("")) {
        frequency[item] =  frequency[item] ? frequency[item] - 1 : 1;
    }
    for (let item in frequency) {
        if (frequency[item] !== 0) {
            return false;
        }
    }
    return true;
};
