function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  // Shuffle the input in place
  for (let i = 0; i < array.length; i++) {
    const random = getRandom(i, array.length - 1);
    if (random !== i) {
      const curr = array[i];
      array[i] = array[random]; 
      array[random] = curr;
    }
  }
  return array;
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
