/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  return candies.map(candy => {
    return candy + extraCandies >= max;
  });
};
