OrganismEvolution = {
  evolve: function(organism) {
    var evolvedOrganism = [];
    for(var row = 0; row < organism.length; row++) {
      evolvedOrganism[row] = [];
      for(var column = 0; column < organism[row].length; column++) {
        var location   = { row: row, column: column };
        var cell       = Organism.cellAt(location, organism);
        var neighbours = Organism.neighbourCount(location, organism);
        evolvedOrganism[row][column] = CellEvolution.evolve(cell, neighbours);
      }
    }
    return evolvedOrganism;
  }
}

