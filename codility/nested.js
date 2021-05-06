function solution(S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        const currChar = S[i];
        if (currChar === '(') {
            stack.push(currChar);
        } else {
            if (!stack.length) return 0;
            stack.pop();
        }
    }
    return stack.length ? 0 : 1;
}
