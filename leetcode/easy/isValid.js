/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 1) return false;
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (obj[currChar]) {
      stack.push(currChar);
    } else {
      const popped = stack.pop();
      if (obj[popped] !== currChar) {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};
