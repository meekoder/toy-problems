/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let count = 0;
  while (n !== 1) {
    const isOdd = n % 2 !== 0;
    if (isOdd) {
      count += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    } else {
      count += n / 2;
      n = n / 2;
    }
  }
  return count; 
};
