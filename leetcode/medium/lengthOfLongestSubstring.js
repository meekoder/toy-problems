/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  let map = new Map();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (map.get(currChar) >= start) {
      start = map.get(currChar) + 1;
    }
    map.set(currChar, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
