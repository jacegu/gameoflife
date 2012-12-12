describe('evolution of', function() {
  beforeEach(function() {
    this.addMatchers({
      toBeAlive: function() {
        return isAlive(this.actual);
      },
      toBeDead: function(expected) {
        return !isAlive(this.actual);
      }
    });
  });
  describe('an alive cell', function() {
    it('kills it if it has no neighbours', function(){
      var neighbourCount = 0
      expect(evolveCell(cell(), neighbourCount)).toBeDead();
    });

    it('kills it if it has only 1 neighbour', function(){
      var neighbourCount = 1
      expect(evolveCell(cell(), neighbourCount)).toBeDead();
    });

    it('keeps it alive if it has 2 neighbours', function(){
      var neighbourCount = 2
      expect(evolveCell(cell(), neighbourCount)).toBeAlive();
    });

    it('keeps it alive if it has 3 neighbours', function(){
      var neighbourCount = 3
      expect(evolveCell(cell(), neighbourCount)).toBeAlive();
    });

    it('kills it if it has more than 3 neighbours', function(){
      var neighbourCount = 4
      expect(evolveCell(cell(), neighbourCount)).toBeDead();
    });
  });
  describe('a dead cell', function() {
    it('reborns it with 3 neighbours', function() {
      var neighbourCount = 3
      expect(evolveCell(deadCell(), neighbourCount)).toBeAlive();
    });
    it('keeps it dead with other than 3 neighbours', function() {
      var neighbourCount = 2
      expect(evolveCell(deadCell(), neighbourCount)).toBeDead();
      neighbourCount = 4
      expect(evolveCell(deadCell(), neighbourCount)).toBeDead();
    });
  });
});
