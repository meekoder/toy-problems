function solution(S) {
    const obj = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        const currChar = S[i];
        if (obj[currChar]) {
            stack.push(currChar);
        } else {
            const popped = stack.pop();
            if (obj[popped] !== currChar) return 0;
        }
    }
    return stack.length ? 0 : 1;
}
