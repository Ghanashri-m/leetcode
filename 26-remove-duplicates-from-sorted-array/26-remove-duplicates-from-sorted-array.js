/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
   let j = 1;
   for (let i = 0; i < (nums.length - 1); i++ ) {
       if (nums[i] !== nums[i+1]) {
           nums[j] = nums[i+1];
           j++;
       }
   }
   return j;
};

let len = removeDuplicates(nums);

for (let i = 0; i < len; i++) {
    console.log(nums[i]);
}