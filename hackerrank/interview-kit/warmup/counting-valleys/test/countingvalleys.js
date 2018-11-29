const tap = require('tap')
const countingvalleys = require('../countingvalleys')

tap.equal(countingvalleys(12, 'DDUUDDUDUUUD'), 2)
tap.equal(countingvalleys(8, 'UDDDUDUU'), 1)

