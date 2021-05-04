function solution(X, A) {
    const set = new Set();
    for (let i = 0; i < A.length; i++) {
        const currNum = A[i];
        if (!set.has(currNum)) {
            set.add(currNum);
        } 
        if (set.size === X) return i;
    }
    return -1;
}
