/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const sorted = groupSizes.slice().sort();
  const grouped = [];
  let group = [];
  for (let i = 0; i < sorted.length; i++) {
    const currNum = sorted[i];
    const idx = groupSizes.indexOf(currNum);
    groupSizes[idx] = 'x';
    group.push(idx);
    if (group.length === currNum) {
      grouped.push(group);
      group = [];
    }
  }
  return grouped;
};
