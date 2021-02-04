let zeros = 0;
let count = 0;
var uniquePathsIII = function(grid) {
    zeros = 0;
    count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const curr = grid[i][j];
            if (curr == 0) {
                zeros++;
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const curr = grid[i][j];
            if (curr == 1) {
                return fn(i, j, grid, -1);
            }
        }   
    } 
};

const fn = (row, col, grid, c) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
        return;
    }

    if (grid[row][col] === 3) {
        return;    
    }

    if (grid[row][col] === -1) {
        return;
    }

    if (grid[row][col] === 2) {
        if (zeros === c) {
            count++;
        }
        return;
    }

    grid[row][col] = 3;
    fn(row - 1, col, grid, c + 1);
    fn(row + 1, col, grid, c + 1);
    fn(row, col - 1, grid, c + 1);
    fn(row, col + 1, grid, c + 1);
    grid[row][col] = 0;
    
    return count;
};
