# Computron

Create a computed value that will be updated automatically whenever one of te dependencies change.

Example:

    var r1 = new ReactiveVar(1);
    var r2 = new ReactiveVar(1);

    var sum = new Computron(function () {
      return r1.get() + r2.get();
    });
