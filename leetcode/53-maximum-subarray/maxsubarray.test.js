const maxSubArray = require('./maxsubarray')

test('it returns max sub array sum', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6)
  expect(maxSubArray([1,0,2,0,3,-5,4])).toEqual(6)
  expect(maxSubArray([1,2,3,4])).toEqual(10)
  expect(maxSubArray([4,3,2,1])).toEqual(10)
  expect(maxSubArray([-1])).toEqual(-1)
})

