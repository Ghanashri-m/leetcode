/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.forEach((item) => {
        if (item.toString().length % 2 === 0) {
            count++;
        }
    });
    return count;
};