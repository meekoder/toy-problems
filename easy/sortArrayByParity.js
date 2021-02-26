/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const sorted = [];
  for (let i = 0; i < A.length; i++) {
    const currNum = A[i];
    if (currNum % 2 === 0) {
      sorted.unshift(currNum);
    } else {
      sorted.push(currNum);
    }
  }
  return sorted;
};
