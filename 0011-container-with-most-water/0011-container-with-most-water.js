/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    
    while (l < r) {
        let length = r - l;
        let breadth = Math.min(height[l], height[r])
        let area = length * breadth;
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return maxArea;
};