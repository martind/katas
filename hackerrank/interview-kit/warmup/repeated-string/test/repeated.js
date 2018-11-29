const tap = require('tap')
const repeated = require('../repeated')

tap.equal(repeated('aba', 10), 7)
tap.equal(repeated('abcac', 10), 4)
tap.equal(repeated('a', 1000000000000), 1000000000000)
