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
    return evolveAliveCell(cell, cellsNeighbourCount);
  return evolveDeadCell(cell, cellsNeighbourCount);
}

function evolveAliveCell(cell, cellsNeighbourCount) {
  if (tooLonely(cellsNeighbourCount) || tooCrowded(cellsNeighbourCount))
    return kill(cell);
  return cell;
}

function evolveDeadCell(cell, cellsNeighbourCount) {
  if (cellsNeighbourCount == REBORN_NEIGHBOUR_COUNT)
    return reborn(cell);
  return cell;
}

function tooLonely(neighbourCount) {
  return neighbourCount <= LONELY_NEIGHBOUR_COUNT;
}

function tooCrowded(neighbourCount) {
  return neighbourCount >= CROWDED_NEIGHBOUR_COUNT;
}
