
//http://en.wikipedia.org/wiki/File:Computron-sg.jpg

function Computron(f) {
    var value = new ReactiveVar();

    Tracker.autorun(function(comp) {
        value.set( f(comp) );
    });

    // don't just return the underlying reactive var b/c we don't want it to be modified.
    // so, create a new immutable object to pass around
    return {
        get: function() { return value.get(); }
    };
}

this.Computron = Computron;
