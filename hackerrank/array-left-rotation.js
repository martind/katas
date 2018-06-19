// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
function solve(n, rot, elems) {
    let perm = [];
    for (let i = 0; i < n; ++i) {
        let el = (i + rot) % n;
        perm.push(elems[el]);
    }
    return perm.join(' ');
}

console.log(solve(5, 4, [1, 2, 3, 4, 5]));

