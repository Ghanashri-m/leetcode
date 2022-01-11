/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const map = new Map();
    let oddLettersCount = 0;
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    for (let item of map) {
        if (item[1] % 2) {
            oddLettersCount++;
        }
    }
    return oddLettersCount <= 1;
};
