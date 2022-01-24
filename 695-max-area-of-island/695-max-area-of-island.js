/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid = [[],[]];

let seen = [[],[]];

function area(row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || seen[row][column] || grid[row][column] === 0) {
       return 0;   
    }
    seen[row][column] = true;
    return (1 + area(row + 1, column) + area(row - 1, column) + area(row, column - 1) + area(row, column + 1));
}

var maxAreaOfIsland = function(input) {
    grid = input;
    seen = [...Array(grid.length)].map(e => Array(grid[0].length).fill(false));
    let ans = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            ans = Math.max(ans, area(r, c))
        }
    }
    return ans;
};