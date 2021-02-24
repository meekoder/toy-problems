function bishopAndPawn(bishop, pawn) {
  const letters = 'abcdefgh';
  const idx = letters.indexOf(bishop[0]);
  let num = parseInt(bishop[1]);
  let down = parseInt(bishop[1]);
  
  for (let i = idx + 1; i < letters.length; i++) {
    num += 1;
    down -= 1;
    if (letters[i] + num === pawn || letters[i] + down === pawn) return true;
  }
  
  num = parseInt(bishop[1]);
  down = parseInt(bishop[1]);
  for (let i = idx - 1; i >= 0; i--) {
    num -= 1;
    down += 1;
    if (letters[i] + num === pawn || letters[i] + down === pawn) return true;
  }
  
  return false;
}
