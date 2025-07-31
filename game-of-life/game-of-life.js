export const DEAD = "dead";
export const LIVE = "live";

export function survivalStatus(numberOfNeighbours, status) {
    if (numberOfNeighbours < 2) {
        return DEAD;
    }
    if (status === LIVE && (numberOfNeighbours === 2 || numberOfNeighbours === 3)) {
        return LIVE;
    }
    if (status === DEAD && numberOfNeighbours === 3) {
        return LIVE;
    }
    if (numberOfNeighbours > 3) {
        return DEAD;
    }
    return DEAD;
}

export function numberOfAliveNeighbours(grid, x, y) {
    let numberOfNeighbours = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            else {
                if (x + i < 0 || x + i >= grid.length || y + j < 0 || y + j >= grid[0].length) {
                    continue;
                }
                else if (grid[x + i][y + j] === LIVE) {
                    numberOfNeighbours++;
                }
            }
        }
    }
    return numberOfNeighbours;
}

export function nextGeneration(grid) {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
        newGrid[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            newGrid[i][j] = survivalStatus(numberOfAliveNeighbours(grid, i, j), grid[i][j]);
        }
    }
    return newGrid;
}

export function generateRandomGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
            grid[i][j] = Math.random() < 0.3 ? LIVE : DEAD;
        }
    }
    return grid;
}

function renderGameOfLife(size, generations = 1) {
    let grid = generateRandomGrid(size);
    
    for (let gen = 0; gen < generations; gen++) {
        console.log(`\n _____________________________________________________`);
        console.log(grid);
        
        if (gen < generations - 1) {
            grid = nextGeneration(grid);
        }
    }
}

const size = parseInt(process.argv[2]) || 3;
const generations = parseInt(process.argv[3]) || 5;
renderGameOfLife(size, generations);