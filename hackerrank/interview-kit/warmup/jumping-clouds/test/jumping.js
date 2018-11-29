const tap = require('tap')
const jumping = require('../jumping')

tap.equal(jumping([0,0,1,0,0,1,0]), 4)
tap.equal(jumping([0,0,0,0,1,0]), 3)

