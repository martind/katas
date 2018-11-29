const tap = require('tap')
const sockmerchant = require('../sockmerchant')

tap.equal(sockmerchant(9, [10,20,20,10,10,30,50,10,20]), 3)
tap.equal(sockmerchant(10, [1,1,3,1,2,1,3,3,3,3]), 4)

