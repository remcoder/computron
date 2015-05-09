
describe('Computron', function() {
  var r1, r2, sum;
  beforeEach(function() {
    r1 = new ReactiveVar(1);
    r2 = new ReactiveVar(1);

    sum = new Computron(function () {
      return r1.get() + r2.get();
    });
  });

  it('should initially return a calculated value', function(test) {
    test.equal(sum.get(), 2);
  });

  it('should not be mutable (have no set() )', function(test) {
    test.equal('set' in sum, false);
  });

  it('should be re-calculated when either one of the dependencies are invalidated', function(test, waitFor) {

    var count = 0;

    Tracker.autorun(Meteor.bindEnvironment(function() {
      var s = sum.get();
      //console.log(s); // 2, 42

      if (count == 0)
        test.equal(s, 2);

      if (count == 1)
        test.equal(s, 42);

      if (count == 2)
        test.equal(s, 82);

      count++;
    }));

    r2.set(41);

    Meteor.setTimeout(function() {
      r1.set(41);
    }, 10);

    Meteor.setTimeout(waitFor(function() {
     test.equal(count, 3);
    }), 100);

  });

  it('should be re-calculated directly after Tracker.flush()', function(test, waitFor) {
    r2.set(41);
    Tracker.flush();
    test.equal(sum.get(), 42);
  });
});
