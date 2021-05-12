/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[left] < nums[middle]) {
      if (target >= nums[left] && target <= nums[middle]) {
        right = middle;
      } else {
        left = middle + 1;
      }
    } else {
      if (target >= nums[middle + 1] && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }
  }
  
  return nums[left] === target ? left : -1;
};
