const numTeams = (rating) => {
    // initiate count at 0
    let count = 0;

    // iterate 3 times - i, j, k
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                const soldier1 = rating[i];
                const soldier2 = rating[j];
                const soldier3 = rating[k];
                // if i < j and j < k or i > j and j > k
                if (soldier1 < soldier2 && soldier2 < soldier3 || soldier1 > soldier2 && soldier2 > soldier3) {
                    // increment count
                    count++;
                }
            }
        }
    }

    // return count
    return count;
};
