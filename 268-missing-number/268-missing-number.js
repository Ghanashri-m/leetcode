/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let low = 0;
    let ans = 0;
    let high = nums.length;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let count = 0
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] <= mid) {
                count++
            }
        }
        if (count > mid) {
            /** mid is just a normal number, we should go higher */
            low = mid + 1
        } else {
            /** maybe mid is the missing number but we not sure, so we should keep
             * find the smallest possible one with (count <= mid) since
             * only in that condition, we might able to confidently call out 
             * mid is a missing number */
            ans = mid
            high = mid - 1
        }
    }
    return ans
};