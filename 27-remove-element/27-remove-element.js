/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.indexOf(val) === -1) {
       return nums.length;
  } else {
      nums.splice(nums.indexOf(val), 1);
      return removeElement(nums, val);
  }
};

let nums = [0,1,2,2,3,0,4,2];
let len = removeElement(nums, 2);

for (let i = 0; i < len; i++) {
    console.log(nums[i]);
}