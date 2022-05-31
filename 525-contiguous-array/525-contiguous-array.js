/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    
    let map = new Map();
    let maxLength = 0;
    let sum = 0;
    
    map.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 1 ? sum += 1 : sum -= 1;
        map.has(sum) ? maxLength = Math.max(maxLength, i - map.get(sum)) : map.set(sum, i);
    }
    return maxLength;
};