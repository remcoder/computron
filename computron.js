
//http://en.wikipedia.org/wiki/File:Computron-sg.jpg

function Computron(f) {
    var value = new ReactiveVar();

    Tracker.autorun(function(comp) {
        value.set( f(comp) );
    });

    // only expose get(). immutability FTW
    this.get = function() { return value.get(); }
}

this.Computron = Computron;
