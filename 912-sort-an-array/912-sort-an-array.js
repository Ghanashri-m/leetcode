/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return nums.sort((a,b) => a - b)
    mergeSort(nums,new Array(nums.length), 0, nums.length - 1);
    return nums;
};

var mergeSort = function(nums, temp, l, r) { // l = left, r = right
    if (l === r) return;
    const m = Math.floor((l + r) / 2);
    mergeSort(nums, temp, l, m);
    mergeSort(nums, temp, m+1, r);
    merge(nums, temp, l, m, m + 1,  r);
}

var merge = function(nums, temp, l, m, mm,  r) {
    let i = l, tempi = i
    while (l <= m && mm <= r) {
        if (nums[l] <= nums[mm]) {
            temp[i++] = nums[l++]
        } else {
            temp[i++] = nums[mm++]
        }
    }
    
    while (l <= m) {
        temp[i++] = nums[l++]
    }
    
    while (mm <= r) {
        temp[i++] = nums[mm++]
    }
        
    for (let j = tempi; j <= r; j++) {
        nums[j] = temp[j]
    }
}