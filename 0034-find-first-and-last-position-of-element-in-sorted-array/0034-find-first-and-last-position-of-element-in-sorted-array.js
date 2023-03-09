/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            first = i;
            break;
        }
    }
    
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            last = i;
            break;
        }
    }
    return [first, last];
};