
var CellEvolution  = {
  evolve: function(cell, cellsNeighbourCount) {
    if (Cell.isAlive(cell))
      return CellEvolution.evolveAlive(cell, cellsNeighbourCount);
    return CellEvolution.evolveDead(cell, cellsNeighbourCount);
  },
  evolveAlive: function(cell, cellsNeighbourCount) {
    if (CellEvolution.tooLonely(cellsNeighbourCount) ||
        CellEvolution.tooCrowded(cellsNeighbourCount))
      return CellEvolution.kill(cell);
    return cell;
  },
  evolveDead: function(cell, cellsNeighbourCount) {
    if (CellEvolution.rebornConditions(cellsNeighbourCount))
      return CellEvolution.reborn(cell);
    return cell;
  },
  rebornConditions: function(neighbourCount) {
    var REBORN_NEIGHBOUR_COUNT  = 3;
    return neighbourCount == REBORN_NEIGHBOUR_COUNT;
  },
  tooLonely: function(neighbourCount) {
    var LONELY_NEIGHBOUR_COUNT  = 1;
    return neighbourCount <= LONELY_NEIGHBOUR_COUNT;
  },
  tooCrowded: function(neighbourCount) {
    var CROWDED_NEIGHBOUR_COUNT = 4;
    return neighbourCount >= CROWDED_NEIGHBOUR_COUNT;
  },
  kill: function(cell) {
    return Cell.dead();
  },
  reborn: function(cellToReborn) {
    return Cell.alive();
  }
}
