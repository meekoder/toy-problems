const maxSubArray = (nums) => {
    // keep track of max element and max sum
    let maxSum = nums[0];
    // keep current sum
    let currSum = nums[0];

    // iterate nums
    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i];
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += currNum;
        // if current sum > max sum
        if (currSum > maxSum) {
            // set max sum to current sum
            maxSum = currSum;
        }
    }

    // return max sum
    return maxSum;
};
