/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let mul1 = 1;
    for (let i = 0; i < nums.length; i++) {
        left[i] = mul1;
        mul1 = mul1 * nums[i];
    }
    mul1 = 1;
    for (let i = nums.length -1; i >= 0; i--) {
        left[i] = left[i] * mul1;
        mul1 = mul1 * nums[i];
    }
    
    return left;
};