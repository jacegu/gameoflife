function evolve(organism) {
  var evolvedOrganism = [];

  for(var row = 0; row < organism.length; row++) {
    evolvedOrganism[row] = [];
    for(var column = 0; column < organism[row].length; column++) {
      var location   = { row: row, column: column };
      var cell       = cellAt(location, organism);
      var neighbours = neighbourCount(location, organism);
      evolvedOrganism[row][column] = evolveCell(cell, neighbours);
    }
  }
  return evolvedOrganism;
}
