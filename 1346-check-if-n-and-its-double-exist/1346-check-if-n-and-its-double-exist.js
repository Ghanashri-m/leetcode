/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let isExists = false;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] * 2 || arr[i] === arr[j] / 2) {
                isExists = true;
                break;
            }
        }
    }
    return isExists;
};