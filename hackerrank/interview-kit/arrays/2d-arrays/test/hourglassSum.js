const tap = require('tap')
const hourglassSum = require('../hourglassSum')

const hourglass = [
    [-9,-9,-9,1,1,1],
    [0,-9,0,4,3,2],
    [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]
]

tap.equal(hourglassSum(hourglass), 28)

