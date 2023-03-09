/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 1;
    
    if (arr.length < 3) {
        return false;
    }
    
    while (i < arr.length && arr[i] > arr[i-1]) {
        i++;
    }
    if (i === arr.length || i === 1) {
        return false;
    }
    while (i < arr.length && arr[i] < arr[i-1]) {
        i++;
    }
    
    return (i === arr.length);
};