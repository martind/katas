const maxSubArray = function(nums) {
  if (nums.length == 0) return 0

  let sum = 0
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = 0
    }
    max = Math.max(max, sum + nums[i])
    sum += nums[i]
  }

  return max
};


module.exports = maxSubArray

