/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums.length) return -1;
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  
  return nums[left]; 
};
