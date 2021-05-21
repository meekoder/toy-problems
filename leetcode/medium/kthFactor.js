/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let count = 0;
  let factor = 0;
  let i = 1;
  while (count < k) {
    if (n % i === 0) {
      factor = i
      count++;
    }
    if (factor === n && count < k) return -1;
    i++;
  }
  
  return factor;
};
