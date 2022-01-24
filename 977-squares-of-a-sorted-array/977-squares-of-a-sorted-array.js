/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let latest = nums.map((item, index) => {
         return item * item;
    });
    return latest.sort((a, b) => a - b);
};