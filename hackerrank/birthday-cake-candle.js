// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function solve(n, candles) {
    let candlesBlown = 0;
    let max = -Infinity;

    for (let candle of candles) {
        if (candle > max) {
            max = candle;
            candlesBlown = 0;
        }

        if (candle === max) candlesBlown++;
    }

    return candlesBlown;
}

console.log(solve(4, [3,2,1,3]));
