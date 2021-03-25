/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (freq.has(currNum)) {
      const newVal = freq.get(currNum) + 1;
      freq.set(currNum, newVal);
    } else {
      freq.set(currNum, 1);
    }
  }
  const freqArr = [...freq.entries()].sort((a, b) => b[1] - a[1]);;
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(freqArr[i][0]);
  }
  return result;
};
