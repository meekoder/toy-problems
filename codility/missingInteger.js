function solution(A) {
    const arr = new Array(A.length).fill(0);

    for (let i = 0; i < A.length; i++) {
        const currNum = A[i];
        arr[currNum - 1] += 1;
    }

    for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        if (currNum === 0) return i + 1;
    }

    return arr.length + 1;
}
