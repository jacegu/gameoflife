function cell(){
  return { alive: true };
}

function deadCell(){
  return { alive: false };
}

function isAlive(cell){
  return cell.alive;
}

function kill(cell) {
  return deadCell();
}

function reborn(cell_to_reborn) {
  return cell();
}

function evolveCell(cell, cells_neighbour_count) {
  var LONELY_NEIGHBOUR_COUNT  = 1;
  var CROWDED_NEIGHBOUR_COUNT = 4;
  var REBORN_NEIGHBOUR_COUNT  = 3;

  if (isAlive(cell))
    return evolve_alive_cell(cell, cells_neighbour_count);
  return evolve_dead_cell(cell, cells_neighbour_count);

  function evolve_alive_cell(cell, cells_neighbour_count) {
    if (tooLonely(cells_neighbour_count) || tooCrowded(cells_neighbour_count))
      return kill(cell);
    return cell;
  }

  function evolve_dead_cell(cell, cells_neighbour_count) {
    if (cells_neighbour_count == REBORN_NEIGHBOUR_COUNT)
      return reborn(cell);
    return cell;
  }

  function tooLonely(neighbour_count) {
    return neighbour_count <= LONELY_NEIGHBOUR_COUNT;
  }

  function tooCrowded(neighbour_count) {
    return neighbour_count >= CROWDED_NEIGHBOUR_COUNT;
  }
}

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

function cellAt(location, organism) {
  return organism[location.row][location.column];
}

function neighbourCount(location, organism) {
  var count = 0;
  var neighbours = neighbourLocations(location, organism);
  for(var i = 0; i < neighbours.length; i++)
    if (isAlive(cellAt(neighbours[i], organism)))
      count++;
  return count;

  function neighbourLocations(location, organism) {
    var FIRST_ROW    = 0;
    var FIRST_COLUMN = 0;
    var lastRow     = organism.length - 1;
    var lastColumn  = organism[FIRST_ROW].length - 1;
    var neighbours = [];

    for(var row = Math.max(FIRST_ROW, location.row - 1);
        row <= Math.min(lastRow, location.row + 1); row++)
      for(var column = Math.max(FIRST_COLUMN, location.column - 1);
          column <= Math.min(lastColumn, location.column + 1); column++)
        if (notCurrentLocation(row, column, location))
          neighbours.push({row: row, column: column});
    return neighbours;

    function notCurrentLocation(row, column, location) {
      return !(column == location.column && row == location.row)
    }
  }
}
