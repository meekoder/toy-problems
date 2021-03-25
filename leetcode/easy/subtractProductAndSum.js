/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const str = n.toString();
  const prod = str.split('').reduce((a, b) => a * b, 1);
  const sum = str.split('').reduce((a, b) => parseInt(a) + parseInt(b));
  return prod - sum;
};
