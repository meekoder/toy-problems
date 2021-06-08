/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0;
  let currSum = 0;
  for (let i = 0; i < gain.length; i++) {
    const curr = gain[i];
    currSum += curr; 
    max = Math.max(currSum, max);
  }
  return max;
};
