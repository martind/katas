function minBribes(q) {
    const MAX_BRIBES = 2
    const CHAOS = 'Too chaotic'
    const N = q.length
    let bribes = 0

    for (let i = 0; i < N; i++) {
        if (q[i] - MAX_BRIBES - 1 > i) {
            return CHAOS
        }
        let partialBribes = 0
        for (let j = i+1; j < N; j++) {
            if (q[j] < q[i]) {
                partialBribes++
            }
            if (partialBribes >= MAX_BRIBES) break
        }
        bribes += partialBribes
    }

    return bribes
}

module.exports = minBribes

