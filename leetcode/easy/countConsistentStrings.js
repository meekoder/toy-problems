/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const charsAllowed = new Set([...allowed]);
  return words.filter(word => {
    const arr = word.split('');
    for (let i = 0; i < arr.length; i++) {
      if (!charsAllowed.has(arr[i])) {
        return false;
      }
    }
    return true;
  }).length;
};
