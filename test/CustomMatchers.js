beforeEach(function() {
  var customMatchers = {
    toBeAlive: function() {
      return Cell.isAlive(this.actual);
    },
    toBeDead: function(expected) {
      return !Cell.isAlive(this.actual);
    }
  }
  this.addMatchers(customMatchers);
});

