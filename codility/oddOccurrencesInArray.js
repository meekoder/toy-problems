function solution(A) {
    const set = new Set();
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) {
            set.delete(A[i]);
        } else {
            set.add(A[i]);
        }
    }
    return [...set.values()][0];
}
