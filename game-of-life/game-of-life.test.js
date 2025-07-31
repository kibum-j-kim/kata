import { describe, it, expect } from "vitest";

import { survivalStatus, numberOfAliveNeighbours, nextGeneration, generateRandomGrid, DEAD, LIVE } from "./game-of-life.js";

// it('should be true', () => {
//     expect(true).toBe(true);
// });

// it('should be foo', () => {
//     expect(a).toBe('foo');
// });

// 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

describe("live cell with fewer than two live neighbours dies, as if by underpopulation.", () => {
  it("should die with 0 neighbours", () => {
    // let status = underpopulated(0)
    // expect(status).toBe(true)
    let status = survivalStatus(0, LIVE);
    expect(status).toBe(DEAD);
  });

  it("should die with 1 neighbors", () => {
    let status = survivalStatus(1, LIVE);
    expect(status).toBe(DEAD);
  });
});

describe("Any live cell with two or three live neighbours lives on to the next generation.", () => {
  it("should live with 2 neighbours", () => {
    // let status = livesOnCheck(2)
    // expect(status).toBe(true)
    let status = survivalStatus(2, LIVE);
    expect(status).toBe(LIVE);
  });

  it("should live with 3 neighbours", () => {
    let status = survivalStatus(3, LIVE);
    expect(status).toBe(LIVE);
  });
});

describe("Any live cell with more than three live neighbours dies, as if by overpopulation.", () => {
  it("should die with 4 neighbours", () => {
    let status = survivalStatus(4, LIVE);
    expect(status).toBe(DEAD);
  });

  it("should die with 5 neighbours", () => {});
});

describe("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.", () => {
  it("should become alive with 3 neighbours", () => {
    let status = survivalStatus(3, DEAD);
    expect(status).toBe(LIVE);
  });
});

describe("number of alive cell neighbors of a cell", () => {
  it("should say 0 if there are no surrounding alive cells", () => {
    const grid = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(0);
  });

  it("should say 1 if there is 1 diagonal alive cell", () => {
    const grid = [
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(1);
  });

  it("should say 1 if there is 1 adjacent alive cell", () => {
    const grid = [
      [DEAD, DEAD, DEAD],
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(1);
  });

  it("should say 2 if there are 1 diagonal and 1 adjacent alive cells", () => {
    const grid = [
      [LIVE, DEAD, DEAD],
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(2);
  });

  it("should say 2 if there are 2 side adjacent alive cells", () => {
    const grid = [
      [DEAD, DEAD, DEAD],
      [LIVE, DEAD, LIVE],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(2);
  });

  it("should say 2 if there are 2 bottom and top adjacent alive cells", () => {
    const grid = [
      [DEAD, LIVE, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, LIVE, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(2);
  });

  it("should say 2 if there are 2 diagonal alive cells", () => {
    const grid = [
      [LIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, LIVE],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(2);
  });

  it("should say 3 if there are 3 adjacent alive cells", () => {
    const grid = [
      [DEAD, LIVE, DEAD],
      [LIVE, DEAD, LIVE],
      [DEAD, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(3);
  });

  it("should say 3 if there are 3 diagonal alive cells", () => {
    const grid = [
      [LIVE, DEAD, LIVE],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, LIVE],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(3);
  });

  it("should say 3 if there are 2 diagonal and 1 adjacent alive cells", () => {
    const grid = [
      [DEAD, DEAD, LIVE],
      [DEAD, DEAD, LIVE],
      [DEAD, DEAD, LIVE],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(3);
  });

  it("should say 4 if there are 4 adjacent alive cells", () => {
    const grid = [
      [DEAD, LIVE, DEAD],
      [LIVE, DEAD, LIVE],
      [DEAD, LIVE, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(4);
  });

  it("should say 4 if there are 4 diagonal alive cells", () => {
    const grid = [
      [LIVE, DEAD, LIVE],
      [DEAD, DEAD, DEAD],
      [LIVE, DEAD, LIVE],
    ];
  });

  it("should say 4 if there are 4 mixed adjacent and diagonal alive cells", () => {
    const grid = [
      [LIVE, LIVE, DEAD],
      [LIVE, DEAD, DEAD],
      [LIVE, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(4);
  });

  it("should say 5 if there are 5 adjacent alive cells", () => {
    const grid = [
      [LIVE, LIVE, LIVE],
      [LIVE, DEAD, DEAD],
      [LIVE, DEAD, DEAD],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(5);
  });

  it("should say 8 if all neighbors are alive", () => {
    const grid = [
      [LIVE, LIVE, LIVE],
      [LIVE, LIVE, LIVE],
      [LIVE, LIVE, LIVE],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 1, 1);
    expect(numberOfNeighbours).toBe(8);
  });

  it("should say 3 for corner cell with all  neighbours alive", () => {
    const grid = [
      [DEAD, LIVE],
      [LIVE, LIVE],
    ];
    const numberOfNeighbours = numberOfAliveNeighbours(grid, 0, 0);
    expect(numberOfNeighbours).toBe(3);
  });

  it("should say 5 for border cell with all  neighbours alive", () => {
      const grid = [
        [LIVE, DEAD, LIVE],
        [LIVE, LIVE, LIVE],
      ];
      const numberOfNeighbours = numberOfAliveNeighbours(grid, 0, 1);
      expect(numberOfNeighbours).toBe(5);
    });
  });

describe("next generation", () => {
  it("should return the same grid if there are no alive cells", () => {
    const grid = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];
    const nextGenerationGrid = nextGeneration(grid);
    expect(nextGenerationGrid).toEqual(grid);
  });

  it("should return the same grid if there are 3 alive neighbour cells", () => {
    const grid = [
      [DEAD, LIVE, LIVE],
      [DEAD, LIVE, LIVE],
      [DEAD, DEAD, DEAD],
    ];
    const nextGenerationGrid = nextGeneration(grid);
    expect(nextGenerationGrid).toEqual(grid);
  });

  it("should return the dead grid if there is not enough cells", () => {
    const grid = [
      [DEAD, DEAD, DEAD],
      [DEAD, LIVE, DEAD],
      [DEAD, DEAD, DEAD],
    ];

    const expectedGrid = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ];

    const nextGenerationGrid = nextGeneration(grid);
    expect(nextGenerationGrid).toEqual(expectedGrid);
  });

  it("should bring back an alive cell if there is exactly 3 alive neighbor cells", () => {
    const grid = [
      [DEAD, LIVE, DEAD],
      [DEAD, LIVE, LIVE],
      [DEAD, DEAD, DEAD],
    ];

    const expectedGrid = [
      [DEAD, LIVE, LIVE],
      [DEAD, LIVE, LIVE],
      [DEAD, DEAD, DEAD],
    ];

    const nextGenerationGrid = nextGeneration(grid);
    expect(nextGenerationGrid).toEqual(expectedGrid);
  });

  it("should make an alive cell continue to live if there are 2 alive neighbor cells", () => {
    const grid = [
      [DEAD, LIVE, DEAD],
      [DEAD, LIVE, DEAD],
      [DEAD, LIVE, DEAD],
    ];

    const expectedGrid = [
      [DEAD, DEAD, DEAD],
      [LIVE, LIVE, LIVE],
      [DEAD, DEAD, DEAD],
    ];

    const nextGenerationGrid = nextGeneration(grid);
    expect(nextGenerationGrid).toEqual(expectedGrid);
  });
});

describe("random grid generation", () => {
  it("should generate a grid with 10 cells", () => {
    const grid = generateRandomGrid(10);
    expect(grid.length).toBe(10);
    expect(grid[0].length).toBe(10);
  });
});
