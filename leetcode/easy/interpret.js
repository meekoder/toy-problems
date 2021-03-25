/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let str = '';
  for (let i = 0; i < command.length; i++) {
    const currChar = command[i];
    const nextChar = command[i + 1];
    if (currChar === '(') {
        if (nextChar === ')') {
          str += 'o';
          i++;
        }
    } else if (currChar === ')') {
      continue;
    } else {
      str += currChar;
    }
  }
  return str;
};

// simpler
const interpret = (command) => {
  return command
    .split('()')
    .join('o')
    .split('')
    .filter(s => s !== '(' && s !== ')')
    .join('');
};
