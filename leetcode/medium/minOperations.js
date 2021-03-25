/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const result = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    for (let j = 0; j < boxes.length; j++) {
      const absDiff = Math.abs(i - j);
      if (boxes[j] === '1' && absDiff >= 1) {
        count += absDiff;
      }
    }
    result.push(count);
  }
  return result;
};
