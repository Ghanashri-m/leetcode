/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        if (nums[mid] === target) {
            if (mid === 0 || nums[mid - 1] !== target) {
                first = mid;
                break;
            }
            right = mid - 1;
        } else {
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    
    left = 0;
    right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        if (nums[mid] === target) {
            if (mid === (nums.length - 1) || nums[mid + 1] !== target) {
                last = mid;
                break;
            }
            left = mid + 1;
        } else {
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    
    return [first, last];
};