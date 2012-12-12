beforeEach(function() {
  var customMatchers = {
    toBeAlive: function() {
      return isAlive(this.actual);
    },
    toBeDead: function(expected) {
      return !isAlive(this.actual);
    }
  }
  this.addMatchers(customMatchers);
});

