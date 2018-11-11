class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function arrayToTree(data) {
  function bindData(values, i) {
    if (i >= values.length || !values[i]) return null

    const node = new TreeNode(values[i])
    node.left = bindData(values, 2 * i + 1)
    node.right = bindData(values, 2 * i + 2)
    return node
  }

  return bindData(data, 0)
}

const minDepth = require('./index')

test('computes min depth', () => {
  expect(minDepth(arrayToTree([3,9,20,null,null,15,7]))).toBe(2)
  expect(minDepth(arrayToTree([1,2]))).toBe(2)
  expect(minDepth(arrayToTree([5,9,10,2,null,3,6]))).toBe(3)
})

