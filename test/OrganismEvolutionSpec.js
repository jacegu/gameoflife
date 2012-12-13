describe('evolving an organism', function() {
  var organism = [
    [Cell.alive(), Cell.alive(), Cell.dead()],
    [Cell.alive(), Cell.dead(), Cell.alive()],
    [Cell.alive(), Cell.alive(), Cell.dead()]
  ]

  it('OrganismEvolution.evolves each cell in the organism', function() {
    expect(Organism.cellAt({row: 0, column: 0}, OrganismEvolution.evolve(organism))).toBeAlive();
    expect(Organism.cellAt({row: 0, column: 1}, OrganismEvolution.evolve(organism))).toBeAlive();
    expect(Organism.cellAt({row: 0, column: 2}, OrganismEvolution.evolve(organism))).toBeDead();
    expect(Organism.cellAt({row: 1, column: 0}, OrganismEvolution.evolve(organism))).toBeDead();
    expect(Organism.cellAt({row: 1, column: 1}, OrganismEvolution.evolve(organism))).toBeDead();
    expect(Organism.cellAt({row: 1, column: 2}, OrganismEvolution.evolve(organism))).toBeAlive();
    expect(Organism.cellAt({row: 2, column: 0}, OrganismEvolution.evolve(organism))).toBeAlive();
    expect(Organism.cellAt({row: 2, column: 1}, OrganismEvolution.evolve(organism))).toBeAlive();
    expect(Organism.cellAt({row: 2, column: 2}, OrganismEvolution.evolve(organism))).toBeDead();
  });
});
