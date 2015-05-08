# Computron

![computron](http://upload.wikimedia.org/wikipedia/en/f/ff/Computron-sg.jpg)

Create a computed value that will be updated automatically whenever one of the dependencies change.

Example:

    var r1 = new ReactiveVar(21);
    var r2 = new ReactiveVar(21);

    var sum = new Computron(function () {
      return r1.get() + r2.get();
    });

    sum.get(); // 42
