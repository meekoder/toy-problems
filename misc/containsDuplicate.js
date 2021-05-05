const containsDuplicate = (nums) => {
    // initialize a Set
    const noDupes = new Set();
    // iterate through nums array
    for (let i = 0; i < nums.length; i++) {
        // if current number is not in set
        const currNum = nums[i];
        if (!noDupes.has(currNum)) {
            // add current number to set
            noDupes.add(currNum);
        } else {
            // otherwise return true
            return true;
        }
    }
    // return false
    return false;
};

// Short / Cheat
// var containsDuplicate = function(nums) {
//     const set = new Set([...nums]);
//     return nums.length !== set.size;
// };

