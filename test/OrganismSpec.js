describe('an organism', function() {
  var organism = [
    [Cell.alive(), Cell.alive(), Cell.dead()],
    [Cell.alive(), Cell.dead(), Cell.alive()],
    [Cell.alive(), Cell.alive(), Cell.dead()]
  ]

  it('is formed of a grid cells', function() {
    expect(Organism.cellAt({row: 0, column: 2}, organism)).toBeDead();
    expect(Organism.cellAt({row: 1, column: 2}, organism)).toBeAlive();
    expect(Organism.cellAt({row: 2, column: 2}, organism)).toBeDead();
  });

  it('knows the alive neighbours of a given cell', function() {
    expect(Organism.neighbourCount({row: 0, column: 0}, organism)).toBe(2);
    expect(Organism.neighbourCount({row: 0, column: 1}, organism)).toBe(3);
    expect(Organism.neighbourCount({row: 0, column: 2}, organism)).toBe(2);
    expect(Organism.neighbourCount({row: 1, column: 0}, organism)).toBe(4);
    expect(Organism.neighbourCount({row: 1, column: 1}, organism)).toBe(6);
    expect(Organism.neighbourCount({row: 1, column: 2}, organism)).toBe(2);
    expect(Organism.neighbourCount({row: 2, column: 0}, organism)).toBe(2);
    expect(Organism.neighbourCount({row: 2, column: 1}, organism)).toBe(3);
    expect(Organism.neighbourCount({row: 2, column: 2}, organism)).toBe(2);
  });
});


