describe('evolution of', function() {
  describe('an alive cell', function() {
    it('kills it if it has no neighbours', function(){
      var neighbourCount = 0
      expect(evolveCell(Cell.alive(), neighbourCount)).toBeDead();
    });

    it('kills it if it has only 1 neighbour', function(){
      var neighbourCount = 1
      expect(evolveCell(Cell.alive(), neighbourCount)).toBeDead();
    });

    it('keeps it alive if it has 2 neighbours', function(){
      var neighbourCount = 2
      expect(evolveCell(Cell.alive(), neighbourCount)).toBeAlive();
    });

    it('keeps it alive if it has 3 neighbours', function(){
      var neighbourCount = 3
      expect(evolveCell(Cell.alive(), neighbourCount)).toBeAlive();
    });

    it('kills it if it has more than 3 neighbours', function(){
      var neighbourCount = 4
      expect(evolveCell(Cell.alive(), neighbourCount)).toBeDead();
    });
  });
  describe('a dead cell', function() {
    it('reborns it with 3 neighbours', function() {
      var neighbourCount = 3
      expect(evolveCell(Cell.dead(), neighbourCount)).toBeAlive();
    });
    it('keeps it dead with other than 3 neighbours', function() {
      var neighbourCount = 2
      expect(evolveCell(Cell.dead(), neighbourCount)).toBeDead();
      neighbourCount = 4
      expect(evolveCell(Cell.dead(), neighbourCount)).toBeDead();
    });
  });
});
