function jumping(clouds) {
    let jumps = 0
    let i = 0

    while (i < clouds.length - 1) {
        if (clouds[i + 2] === 0) {
            i += 2
        }
        else {
            i += 1
        }

        jumps++
    }

    return jumps
}

module.exports = jumping

