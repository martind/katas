function sockmerchant(n, socks) {
    let pairs = 0
    let colors = []

    for (let i = 0; i < n; i++) {
        let sockColor = socks[i]
        if (colors[sockColor]) {
            pairs++
            delete colors[sockColor]
        }
        else {
            colors[sockColor] = true
        }
    }

    return pairs 
}

module.exports = sockmerchant

