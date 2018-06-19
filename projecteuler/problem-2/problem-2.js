#! /usr/bin/env node

// https://projecteuler.net/problem=2

let sum = 0;
let fibPrev = 1, fib = 1;

while (fib < 4000000) {
    if (fib % 2 === 0) {
        sum += fib;
    }

    [fib, fibPrev] = [fib + fibPrev, fib]
}

console.log(sum);
