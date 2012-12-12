function kill(cell) {
  return deadCell();
}

function reborn(cellToReborn) {
  return cell();
}

var LONELY_NEIGHBOUR_COUNT  = 1;
var CROWDED_NEIGHBOUR_COUNT = 4;
var REBORN_NEIGHBOUR_COUNT  = 3;

function evolveCell(cell, cellsNeighbourCount) {
  if (isAlive(cell))
    return evolve_alive_cell(cell, cellsNeighbourCount);
  return evolve_dead_cell(cell, cellsNeighbourCount);
}

function evolve_alive_cell(cell, cellsNeighbourCount) {
  if (tooLonely(cellsNeighbourCount) || tooCrowded(cellsNeighbourCount))
    return kill(cell);
  return cell;
}

function evolve_dead_cell(cell, cellsNeighbourCount) {
  if (cellsNeighbourCount == REBORN_NEIGHBOUR_COUNT)
    return reborn(cell);
  return cell;
}

function tooLonely(neighbour_count) {
  return neighbour_count <= LONELY_NEIGHBOUR_COUNT;
}

function tooCrowded(neighbour_count) {
  return neighbour_count >= CROWDED_NEIGHBOUR_COUNT;
}
