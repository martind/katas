// https://www.hackerrank.com/challenges/mini-max-sum/problem

function solve(values) {
    let min = Infinity, max = -Infinity;
    let sum = 0;

    values.forEach(v => {
        if (v < min) min = v;
        if (v > max) max = v;
        sum += v;
    });

    return `${sum - max} ${sum - min}`;
}

console.log(solve([1, 2, 3, 4, 5]));

