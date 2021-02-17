/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let currSum = 0;
  return nums.map(num => {
    currSum = currSum + num;
    return currSum;
  });
};
