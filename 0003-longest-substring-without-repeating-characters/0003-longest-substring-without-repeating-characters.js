/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    
    let maxLength = 0;    
    let currString = {}
    let right = 0;
    let left = 0;
    
    while (right < s.length && left < s.length) {
        if (s[right] in currString) {
            left = Math.max(left, currString[s[right]] + 1);
        }
        currString[s[right]] = right;
        maxLength = Math.max(maxLength, (right - left + 1));
        right++;
    }

    return maxLength;
};