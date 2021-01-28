const groupAnagrams = (strs) => {
    // initialize empty object
    const obj = {};
    // iterate through strs array
    for (let i = 0; i < strs.length; i++) {
        const currStr = strs[i];
        // split and sort current string
        const sorted = currStr.split('').sort().join('');
        // check if object has sorted string
        if (obj[sorted]) {
            // push current word into array
            obj[sorted].push(currStr);
        } else {
            // otherwise
            // set sorted string in object to array with current word
            obj[sorted] = [currStr];
        }
    }
    // return values from object
    return Object.values(obj);
};
