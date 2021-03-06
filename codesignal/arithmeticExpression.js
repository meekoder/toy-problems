function arithmeticExpression(a, b, c) {
  const exp = ['+', '-', '*', '/'];
  for (let i = 0; i < exp.length; i++) {
    if (eval(`${a}${exp[i]}${b}`) === c) return true;
  }
  return false;
}
