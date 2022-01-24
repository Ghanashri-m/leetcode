/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split('');
    
    return arr.indexOf(arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x)));
};