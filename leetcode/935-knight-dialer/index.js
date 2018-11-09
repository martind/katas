const dial = {
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [3, 9, 0],
  5: [],
  6: [1, 7, 0],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
  0: [4, 6]
}

const MOD = Math.pow(10, 9) + 7

const cache = {}

function dfs(node, hops) {
  if (hops <= 1)
    return 1

  const cacheKey = node + '_' + hops
  const cachedCount = cache[cacheKey]

  if (cachedCount)
    return cachedCount

  let count = 0
  for (let neighbour of dial[node])
    count += dfs(neighbour, hops - 1)

  const result = count % MOD
  cache[cacheKey] = result
  return result
}

var knightDialer = function (hops) {
  let count = 0

  for (let key of Object.keys(dial))
    count += dfs(key, hops)

  return count % MOD
}

module.exports = knightDialer
