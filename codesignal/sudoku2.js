function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const curr = grid[i][j];
      if (curr !== '.') {
        if (!checkRow(grid[i], j) || !checkColumn(grid, j, i) || !checkSubGrid(grid, i, j)) {
          return false;
        }
      }
    }
  }
  return true;
}

const checkRow = (row, idx) => {
  for (let i = 0; i < row.length; i++) {
    if (i !== idx && row[i] === row[idx]) {
      return false;
    }
  }
  return true;
};

const checkColumn = (grid, col, idx) => {
  for (let i = 0; i < grid.length; i++) {
    if (i !== idx && grid[i][col] === grid[idx][col]) {
      return false;
    }
  }
  return true;
};

const checkSubGrid = (grid, row, col) => {
  let start = 0;
  if (col >= 3 && col <= 5) {
    start = 3;
  } else if (col >= 6) {
    start = 6;
  }
  
  let rowEnd = 3;
  if (row >= 3 && row <= 5) {
    rowEnd = 6;
  } else if (row >= 6) {
    rowEnd = 8;
  }
  
  for (let i = row; i < rowEnd; i++) {
    for (let j = start; j < start + 3; j++) {
      console.log(i, j)
      if (grid[i][j] !== '.' && i !== row && j !== row) {
        if (grid[i][j] === grid[row][col]) {
          return false;
        }
      }
    }
  }
  return true;
};
