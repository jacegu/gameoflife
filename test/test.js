describe('evolving an organism', function() {
  var organism = [
    [cell(), cell(), deadCell()],
    [cell(), deadCell(), cell()],
    [cell(), cell(), deadCell()]
  ]

  it('evolves each cell in the organism', function() {
    isAlive(cellAt({row: 0, column: 0}, evolve(organism))).should.be.true
    isAlive(cellAt({row: 0, column: 1}, evolve(organism))).should.be.true
    isAlive(cellAt({row: 0, column: 2}, evolve(organism))).should.be.false
    isAlive(cellAt({row: 1, column: 0}, evolve(organism))).should.be.false
    isAlive(cellAt({row: 1, column: 1}, evolve(organism))).should.be.false
    isAlive(cellAt({row: 1, column: 2}, evolve(organism))).should.be.true
    isAlive(cellAt({row: 2, column: 0}, evolve(organism))).should.be.true
    isAlive(cellAt({row: 2, column: 1}, evolve(organism))).should.be.true
    isAlive(cellAt({row: 2, column: 2}, evolve(organism))).should.be.false
  });

});
