function solution(A) {
    if (A.length === 1) return 0;
    const freq = new Map();
    for (let i = 0; i < A.length; i++) {
        const curr = A[i];
        if (freq.has(curr)) {
            const newVal = freq.get(curr) + 1;
            freq.set(curr, newVal);
            if (freq.get(curr) > A.length / 2) return i;
        } else {
            freq.set(curr, 1);
        }
    }
    return -1;
}
