describe('Game', function() {

 var game

 beforeEach(function() {
  game = new Game();
 });

  it('can keep a score count', function() {
  });

  it('can only have ten frames', function() {
  });

  it('each frame consists of a maximum of two rolls', function() {
  });

  it('the max number of pins that can be knocked down is ten', function() {
  });

  it('the pins are reset after every frame', function() {
  });


  describe('Strikes', function() {

    it('reports "strike" if ten pins are knocked down on the first roll', function() {
    });

    it('ends the frame if a strike is bowled on the first go', function() {
    });

    it('adds a bonus score for a strike', function() {

    });

  });


  describe('Spares', function() {

    it('reports a "spare" if ten pins are knocked down after the second roll', function() {
    });

    it('adds a bonus score for a spare', function() {

    });

  });

  describe('the 10th frame', function() {

    it('calculates the bonus for a strike in the 10th frame', function() {

    });

    it('calculates the bonus for a spare in the 10th frame', function() {

    });

    it('player cannot roll more than three times in the 10th frame', function() {

    });

  });

  describe('gutter game', function() {

    it('the gutter game scores zero points', function() {

    });

  });

  describe('the perfect game', function() {

    it('the perfect game scores 300 points', function() {

    });

  });

});
