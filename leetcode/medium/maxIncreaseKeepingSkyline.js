/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const horizMaxVals = getHorizontalMaxValues(grid);
  const vertMaxVals = getVerticalMaxValues(grid);
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currNum = grid[i][j];
      const min = Math.min(horizMaxVals[i], vertMaxVals[j]);
      const diff = min - currNum;
      sum += diff;
    }
  }
  return sum;
};

const getHorizontalMaxValues = (grid) => {
  return grid.map(x => Math.max(...x));
};

const getVerticalMaxValues = (grid) => {
  const vertMaxVals = [];
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > max) {
        max = grid[j][i];
      }
    }
    vertMaxVals.push(max);
    max = 0;
  }
  return vertMaxVals;
};
