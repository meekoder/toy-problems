const findDuplicate = (nums) => {
    // keep track of seen nums
    // make a set
    const numsSeen = new Set();
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        // if num is in set
        if (numsSeen.has(currNum)) {
            // return num
            return currNum;
        }
        // add num to set
        numsSeen.add(currNum);
    }
};
