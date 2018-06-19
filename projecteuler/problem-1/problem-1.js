#! /usr/bin/env node

// https://projecteuler.net/problem=1

const sum =
    Array.from({length: 1000}, (_, i) => i)
         .reduce((accum, value) => value % 3 === 0 || value % 5 === 0 ? accum + value : accum, 0)

console.log(sum);
