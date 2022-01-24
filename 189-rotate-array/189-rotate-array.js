/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {    
    function reverse(nums, start, end) {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

};

// Alternate sollution, exceeds time limit

// while (k) {
//         let item = nums.pop();
//         nums.unshift(item);
//         k--;
//     }