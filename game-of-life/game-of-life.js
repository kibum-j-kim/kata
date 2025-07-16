export const DEAD = "dead";
export const ALIVE = "alive";

export function survivalStatus(numberOfNeighbours) {
    if (numberOfNeighbours < 2) {
        return DEAD;
    }
    if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
        return ALIVE;
    }
    if (numberOfNeighbours > 3) {
        return DEAD;
    }
    return DEAD;
}