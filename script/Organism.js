Organism = {
  cellAt: function(location, organism) {
    return organism[location.row][location.column];
  },
  neighbourCount: function(location, organism) {
    var count = 0;
    var neighbours = Organism.neighbourLocations(location, organism);
    for(var i = 0; i < neighbours.length; i++)
      if (Cell.isAlive(Organism.cellAt(neighbours[i], organism)))
        count++;
    return count;
  },
  neighbourLocations: function(location, organism) {
    var FIRST_ROW    = 0;
    var FIRST_COLUMN = 0;
    var lastRow     = organism.length - 1;
    var lastColumn  = organism[FIRST_ROW].length - 1;
    var neighbours = [];

    for(var row = Math.max(FIRST_ROW, location.row - 1);
        row <= Math.min(lastRow, location.row + 1); row++)
      for(var column = Math.max(FIRST_COLUMN, location.column - 1);
          column <= Math.min(lastColumn, location.column + 1); column++)
        if (Organism.notCurrentLocation(row, column, location))
          neighbours.push({row: row, column: column});
    return neighbours;
  },
  notCurrentLocation: function(row, column, location) {
    return !(column == location.column && row == location.row)
  }
}
