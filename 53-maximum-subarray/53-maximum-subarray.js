/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let max = Math.pow(2, 53);
     let min = - max - 1;
     let current = 0;
     let sub = [];
    
     for (let i = 0; i < nums.length; i++) {
         current = current + nums[i];
         if (min < current) {
             min = current
             sub.push(i);
         }
         if (current < 0) {
             current = 0;
         }
     }
    return min;
};