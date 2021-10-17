function getMaxLessThanK(n, k) {
    let max = 0;
    for (let i = n; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            if ((j & i) < k && (j & i) > max) {
                max = j & i;
            }
        }
    }
    return max;
}
