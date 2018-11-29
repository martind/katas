function repeated(letters, n) {
    let count = 0
    const length = letters.length

    for (let char of letters) {
        if (char === 'a') count++
    }

    count = count * Math.floor(n / length)

    for (let i = 0; i < n % length; i++) {
        if (letters[i] === 'a') count++
    }

    return count
}

module.exports = repeated

