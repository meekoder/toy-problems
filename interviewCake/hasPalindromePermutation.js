function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  const freq = new Map();
  
  for (let i = 0; i < theString.length; i++) {
    const currChar = theString[i];
    if (freq.has(currChar)) {
      const newVal = freq.get(currChar) + 1;
      freq.set(currChar, newVal);
    } else {
      freq.set(currChar, 1);
    }
  }
  
  let ones = 0;
  const values = [...freq.values()];
  
  for (let i = 0; i < values.length; i++) {
    const currVal = values[i];
    if (currVal === 1) {
      ones++;
    }
    if (ones > 1 && (currVal % 2 !== 0)) {
      return false;
    }
  }

  return true;
}


















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
