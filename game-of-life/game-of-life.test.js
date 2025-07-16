import { describe, it, expect } from 'vitest';

import { survivalStatus, DEAD, ALIVE } from './game-of-life.js';

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

describe('live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
    it('should die with 0 neighbours', () => {
        // let status = underpopulated(0)
        // expect(status).toBe(true)
        let status = survivalStatus(0)
        expect(status).toBe(DEAD)
    });

    it('should die with 1 neighbors', () => {
        let status = survivalStatus(1)
        expect(status).toBe(DEAD)
    });
});

describe('Any live cell with two or three live neighbours lives on to the next generation.', () => {
    it('should live with 2 neighbours', () => {
        // let status = livesOnCheck(2)
        // expect(status).toBe(true)
        let status = survivalStatus(2)
        expect(status).toBe(ALIVE)
    });

    it('should live with 3 neighbours', () => {
        let status = survivalStatus(3)
        expect(status).toBe(ALIVE)
    });
});

describe('Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    it('should die with 4 neighbours', () => {
        let status = survivalStatus(4)
        expect(status).toBe(DEAD)
    });

    it('should die with 5 neighbours', () => {
});

describe('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    it('should become alive with 3 neighbours', () => {
        let status = DEAD;
        status = survivalStatus(3)
        expect(status).toBe(ALIVE)
    });


});
})
