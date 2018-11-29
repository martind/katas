function countingvalleys(steps, path) {
    let count = 0
    let insideValley = false
    let height = 0
    let prevHeight = 0

    for (let i = 0; i < steps; i++) {
        height = path[i] === 'D' ? height - 1 : height + 1

        if (prevHeight === 0 && height < 0) {
            insideValley = true
        }

        if (height >= 0 && insideValley) {
            insideValley = false
            count++
        }

        prevHeight = height
    }

    if (insideValley) count++

    return count
}

module.exports = countingvalleys

