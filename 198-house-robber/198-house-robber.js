/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let maxValue = 0;
    
    let prevValue = 0;
    let prevPrevValue = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        maxValue = Math.max(prevValue, prevPrevValue + nums[i]);
        prevPrevValue = prevValue;
        prevValue = maxValue;
    }
    
    return maxValue;
};