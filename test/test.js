describe('a squared grid organism', function() {
  var organism = [
    [cell(), cell(), deadCell()],
    [cell(), deadCell(), cell()],
    [cell(), cell(), deadCell()]
  ]

  it('is formed of a grid cells', function() {
    isAlive(cellAt({row: 0, column: 2}, organism)).should.be.false
    isAlive(cellAt({row: 1, column: 2}, organism)).should.be.true
    isAlive(cellAt({row: 2, column: 2}, organism)).should.be.false
  });

  it('knows the alive neighbours of a given cell', function() {
    neighbourCount({row: 0, column: 0}, organism).should.equal(2);
    neighbourCount({row: 0, column: 1}, organism).should.equal(3);
    neighbourCount({row: 0, column: 2}, organism).should.equal(2);
    neighbourCount({row: 1, column: 0}, organism).should.equal(4);
    neighbourCount({row: 1, column: 1}, organism).should.equal(6);
    neighbourCount({row: 1, column: 2}, organism).should.equal(2);
    neighbourCount({row: 2, column: 0}, organism).should.equal(2);
    neighbourCount({row: 2, column: 1}, organism).should.equal(3);
    neighbourCount({row: 2, column: 2}, organism).should.equal(2);
  });
});

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
