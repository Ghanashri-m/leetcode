/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = new Set(), column = new Set();
    
    for (let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                row.add(r);
                column.add(c);
            }
        }
    }
    
    row.forEach((r, i) => {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = 0;
        }
    });
    
    column.forEach((c, i) => {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0;
        }
    });
    
    return matrix;
};