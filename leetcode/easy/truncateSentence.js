var truncateSentence = function(s, k) {
  return s.split(' ').filter((str, i) => i < k).join(' ');
};
