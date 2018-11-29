function hourglassSum(h) {
    let max = -Infinity

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            let count = 0
            let near = [
                [i-1, j-1], [i-1, j], [i-1, j+1],
                            [i, j],
                [i+1, j-1], [i+1, j], [i+1, j+1]
            ]

            for (let n of near) {
                count += h[n[0]][n[1]]
            }

            max = Math.max(max, count)
        }
    }

    return max
}

module.exports = hourglassSum

