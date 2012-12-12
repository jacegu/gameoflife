describe('an organism', function() {
  var organism = [
    [cell(), cell(), deadCell()],
    [cell(), deadCell(), cell()],
    [cell(), cell(), deadCell()]
  ]

  it('is formed of a grid cells', function() {
    expect(cellAt({row: 0, column: 2}, organism)).toBeDead();
    expect(cellAt({row: 1, column: 2}, organism)).toBeAlive();
    expect(cellAt({row: 2, column: 2}, organism)).toBeDead();
  });

  it('knows the alive neighbours of a given cell', function() {
    expect(neighbourCount({row: 0, column: 0}, organism)).toBe(2);
    expect(neighbourCount({row: 0, column: 1}, organism)).toBe(3);
    expect(neighbourCount({row: 0, column: 2}, organism)).toBe(2);
    expect(neighbourCount({row: 1, column: 0}, organism)).toBe(4);
    expect(neighbourCount({row: 1, column: 1}, organism)).toBe(6);
    expect(neighbourCount({row: 1, column: 2}, organism)).toBe(2);
    expect(neighbourCount({row: 2, column: 0}, organism)).toBe(2);
    expect(neighbourCount({row: 2, column: 1}, organism)).toBe(3);
    expect(neighbourCount({row: 2, column: 2}, organism)).toBe(2);
  });
});


