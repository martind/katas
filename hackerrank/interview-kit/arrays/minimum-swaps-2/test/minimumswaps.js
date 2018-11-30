const tap = require('tap')
const minimumswaps = require('../minimumswaps')

tap.equal(minimumswaps([4,3,1,2]), 3)
tap.equal(minimumswaps([2,3,4,1,5]), 3)
tap.equal(minimumswaps([1,3,5,2,4,6,7]), 3)
tap.equal(minimumswaps([7,1,3,2,4,5,6]), 5)

