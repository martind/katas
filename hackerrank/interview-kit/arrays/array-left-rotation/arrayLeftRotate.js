// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
function arrayLeftRotate(n, rot, elems) {
    let perm = [];

    for (let i = 0; i < n; ++i) {
        let el = (i + rot) % n;
        perm.push(elems[el]);
    }

    return perm.join(' ');
}

module.exports = arrayLeftRotate

