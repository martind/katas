const tap = require('tap')
const arrayLeftRotate = require('../arrayLeftRotate')

tap.equal(arrayLeftRotate(5, 4, [1,2,3,4,5]), '5 1 2 3 4')

