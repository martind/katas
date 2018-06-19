// Google Interview Exercise from https://www.youtube.com/watch?v=IWvbPIYQPFM
const ROWS = 3
const COLS = 4
const data = [
    ['R', 'R', 'W', 'R'],
    ['R', 'G', 'W', 'G'],
    ['W', 'G', 'G', 'G']
]

const visited = {}

function dfs(row, col) {
    const isValid = (row, col) => row >=0 && row < ROWS && col >= 0 && col < COLS
    const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const color = data[row][col]
    const nodes = [[row, col]];
    let count = 1

    while (nodes.length) {
        const node = nodes.pop()

        if (!visited[node]) {
            visited[node] = true

            for (const offset of offsets) {
                const neighbourRow = node[0] + offset[0]
                const neighbourCol = node[1] + offset[1]

                if (isValid(neighbourRow, neighbourCol) &&
                    data[neighbourRow][neighbourCol] === color &&
                    !visited[[neighbourRow, neighbourCol]])
                {
                    nodes.push([neighbourRow, neighbourCol])
                    count++
                }
            }
        }
    }

    return count
}

let max = 0;

for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
        if (!visited[[i, j]]) {
            const colorCount = dfs(i, j);
            console.log('from', i, j, 'I counted', colorCount)
            if (colorCount > max) {
                max = colorCount
            }
        }
    }
}

console.log('max is', max)
