var countMatches = function(items, ruleKey, ruleValue) {
  const obj = {
    'type': 0,
    'color': 1,
    'name': 2,
  };
  return items.filter(i => i[obj[ruleKey]] === ruleValue).length;
};
