var smallerNumbersThanCurrent = function(nums) {
  return nums.map(num => nums.filter(n => n < num).length);
};
