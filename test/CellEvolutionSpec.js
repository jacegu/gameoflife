describe('an alive cell evolving', function() {
  it('gets killed if it has no neighbours', function(){
    var neighbourCount = 0
    expect(isAlive(evolveCell(cell(), neighbourCount))).toBe(false);
  });

  it('gets killed if it has only 1 neighbour', function(){
    var neighbourCount = 1
    expect(isAlive(evolveCell(cell(), neighbourCount))).toBe(false);
  });

  it('remains alive if it has 2 neighbours', function(){
    var neighbourCount = 2
    expect(isAlive(evolveCell(cell(), neighbourCount))).toBe(true);
  });

  it('remains alive if it has 3 neighbours', function(){
    var neighbourCount = 3
    expect(isAlive(evolveCell(cell(), neighbourCount))).toBe(true);
  });

  it('gets killed if it has more than 3 neighbours', function(){
    var neighbourCount = 4
    expect(isAlive(evolveCell(cell(), neighbourCount))).toBe(false);
  });
});

describe('a dead cell', function() {
  describe('evolving with 3 neighbours', function() {
    it('reborns', function() {
      var neighbourCount = 3
      expect(isAlive(evolveCell(deadCell(), neighbourCount))).toBe(true);
    });
  });
  describe('evolving with other than 3 neighbours alive', function() {
    it('reborns', function() {
      var neighbourCount = 2
      expect(isAlive(evolveCell(deadCell(), neighbourCount))).toBe(false);
      neighbourCount = 4
      expect(isAlive(evolveCell(deadCell(), neighbourCount))).toBe(false);
    });
  });
});
