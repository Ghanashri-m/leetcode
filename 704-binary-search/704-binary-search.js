/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Regular sollution
// var search = function(nums, target) {
//     let itemIndex = -1;
//     nums.forEach((item, index, arr) => {
//         if (item === target) {
//             itemIndex = index;
//             return;
//         }
//         return;
//     });
//     return itemIndex;
// };

// Binary search

var search = function(nums, target) {
    if (target < nums[0] || target > nums[nums.length - 1]) {
        return -1;
    }
    // let start = 0, end = nums.length - 1, mid;
    // while (start <= end) {
    //     mid = Math.floor((start + end) / 2);
    //     if (nums[mid] === target) {
    //         return mid;
    //     } else if (nums[mid] > target) {
    //         end = mid - 1;
    //     } else {
    //         start = mid + 1;
    //     }
    // }
    // return -1;
    
    let recursiveFunction = function (arr, x, start, end) {
        if (start > end) return -1;
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return mid;
        if(arr[mid] > x)
            return recursiveFunction(arr, x, start, mid-1);
        else
            return recursiveFunction(arr, x, mid+1, end);
    }
    return recursiveFunction(nums, target, 0, nums.length - 1);
};