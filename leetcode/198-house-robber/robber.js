/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    const maxMoney = []

    function moneyAt(i) {
        return i < 0 ? 0 : maxMoney[i]
    }

    if (nums.length <= 0) return 0

    for (let i = 0; i < nums.length; ++i)
        maxMoney.push(Math.max(moneyAt(i - 1), nums[i] + moneyAt(i - 2)))

    return maxMoney[maxMoney.length - 1]
};

module.exports = rob
