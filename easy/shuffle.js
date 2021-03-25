/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const firstHalf = nums.slice(0, n);
  const lastHalf = nums.slice(n);  
  const result = [];
  for (let i = 0 ; i < n; i++) {
    result.push(firstHalf[i], lastHalf[i]);
  }
  return result;
};
