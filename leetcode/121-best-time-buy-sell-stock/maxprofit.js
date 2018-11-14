const maxProfit = function(prices) {
  if (prices.length == 0) return 0

  let min = Infinity
  let maxValue = 0
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < min) min = prices[i]
    maxValue = Math.max(maxValue, prices[i] - min)
  }
  
  return maxValue
}

module.exports = maxProfit

