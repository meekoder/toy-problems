/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  // iterate chars
  // keep track of current letter
  // when character changes, append length to string
  let s = '';
  let count = 0;
  
  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i];
    if (chars[i + 1] !== curr) {
      if (count === 0) {
        s += curr;
      } else {
        count++;
        s += curr + count;
        count = 0;
      }
    } else {
      count++;
    }
  }
  
  for (let i = 0 ; i < chars.length; i++) {
    chars[i] = s[i];
  }
  chars.slice(s.length - 1);
  return s.length;
};
