function minimumswaps(a) {
    const N = a.length
    let swaps = 0

    for (let i = 0; i < N; i++) {
        const target = i + 1
        if (a[i] != target) {
            for (let j = i + 1; j < N; j++) {
                if (a[j] === target) {
                    a[j] = a[i]
                    a[i] = target
                    swaps++
                    break
                }
            }
        }
    }

    return swaps
}

module.exports = minimumswaps

