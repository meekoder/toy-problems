/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  let arr = s.split('');
  let result = '';
  for (let i = 0; i < arr.length; i += 2) {
    const curr = arr[i];
    const num = Number(arr[i + 1]);
    if (isNaN(num)) {
      result += curr;
    } else {
      const letter = shift(curr, num);
      result += curr + letter;
    }
  }
  return result;
};

const shift = (letter, num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const idx = alphabet.indexOf(letter) + num;
  return alphabet[idx];
};
