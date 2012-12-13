describe('evolving an organism', function() {
  var organism = [
    [Cell.alive(), Cell.alive(), Cell.dead()],
    [Cell.alive(), Cell.dead(), Cell.alive()],
    [Cell.alive(), Cell.alive(), Cell.dead()]
  ]

  it('evolves each cell in the organism', function() {
    expect(cellAt({row: 0, column: 0}, evolve(organism))).toBeAlive();
    expect(cellAt({row: 0, column: 1}, evolve(organism))).toBeAlive();
    expect(cellAt({row: 0, column: 2}, evolve(organism))).toBeDead();
    expect(cellAt({row: 1, column: 0}, evolve(organism))).toBeDead();
    expect(cellAt({row: 1, column: 1}, evolve(organism))).toBeDead();
    expect(cellAt({row: 1, column: 2}, evolve(organism))).toBeAlive();
    expect(cellAt({row: 2, column: 0}, evolve(organism))).toBeAlive();
    expect(cellAt({row: 2, column: 1}, evolve(organism))).toBeAlive();
    expect(cellAt({row: 2, column: 2}, evolve(organism))).toBeDead();
  });
});
