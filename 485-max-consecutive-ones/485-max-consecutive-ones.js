/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let ans = 0;
    nums.forEach((item, index) => {
        if (item === 1) {
            maxCount++
           if (ans <= maxCount) {
               ans = maxCount;
           }
        } else {
            maxCount = 0;
        }
    });
    return ans;
};