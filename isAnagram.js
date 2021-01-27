const isAnagram = (s, t) => {
    // i: string, string
    // o: boolean
    
    // if the lengths dont match
    if (s.length !== t.length) {
        // return false
        return false;
    }
    
    // split t
    const testArr = t.split('');
    // iterate through s
    for (let i = 0; i < s.length; i++) {
        // get index of current letter from t
        const currLetter = s[i];
        const letterIdx = testArr.indexOf(currLetter);
        // if indexOf is -1
        if (letterIdx === -1) {
            // return false
            return false;
        }
        // remove letter from t
        testArr.splice(letterIdx, 1);
    }
    // return true
    return true;
};
