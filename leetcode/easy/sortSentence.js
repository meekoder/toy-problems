/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const split = s.split(' ');
  const results = new Array(split.length);
  for (let i = 0; i < split.length; i++) {
    const curr = split[i];
    const idx = curr.slice(curr.length - 1) - 1;
    results[idx] = curr.slice(0, curr.length - 1);
  }
  return results.join(' ');
};
