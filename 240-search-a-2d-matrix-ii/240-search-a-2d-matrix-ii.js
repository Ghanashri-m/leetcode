/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length-1
    while(row <= matrix.length-1 && col >= 0) {
        if(matrix[row][col] == target) return true;
        else if (target > matrix[row][col]) row++;
        else col--;
    }
    return false;
};