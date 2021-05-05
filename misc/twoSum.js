const twoSum = (nums, target) => {
  // i: array of integers, integer
  // o: array of 2 indicies
  // c: only 1 answer exists

  // initialize an empty object
  const differences = {};

  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // if object has current number
    const currNum = nums[i];
    if (differences[currNum] !== undefined) {
      // return [value from object, i]
      return [differences[currNum], i];
    }
    // set target - current number = i in the object
    differences[target - currNum] = i;
  }
};

console.log(twoSum([2,7,11,15], 9));
