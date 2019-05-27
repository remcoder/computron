# Computron [![Build Status](https://travis-ci.org/remcoder/computron.svg?branch=master)](https://travis-ci.org/remcoder/computron)

![image](https://user-images.githubusercontent.com/461650/58403119-31abbe00-8062-11e9-8cb7-80b498bf97cc.png)

Computron is for creating reactive _computations_, just like ReactiveVar is for reactive _values_ and was inspired by computed values from [Knockout](http://knockoutjs.com/documentation/computedObservables.html) and [Vue.js](http://vuejs.org/api/options.html#computed).

### Example

    var r1 = new ReactiveVar(21);
    var r2 = new ReactiveVar(21);

    var sum = new Computron(function () {
      return r1.get() + r2.get();
    });

## Installation

	$ meteor add remcoder:computron

## Rationale

While Meteor offers a very flexible way of doing reactivity, having to wrap code in an autorun doesn't always lead to
code that makes the intent clear. This becomes most apparent when you have a cascade of reactive vars that each depend
on one of the other, mixed with side-effects.

TODO: some good examples

## Demo
See in in action [here](http://meteorpad.com/pad/aExzaQ48FAT89Bwba/Computron)

## API

### Creation

    var comp = new Computron(<computation>)

`computation` : _a function that returns a value. It can make use of reactive sources like Session, ReactiveVar etc._ 

### Example

	var taxRate = 0.2;
	var priceAfterTax = new Computron(function(){
		return Session.get('price') * (1 + taxRate);
	});

To get the current value of the computation, call the `get()` method it. For instance:

     Session.set('priceLabel', 'total :' + priceAfterTax.get() )

The computed value will be updated reactively and propagated to the dependents of the Computron.

### Advanced
The underlying `Tracker.Computation` is accessible from within the callback. Using that you could for instance `stop()` the computation.

	var priceAfterTax = new Computron(function(comp) {
		if (sometging) 
			comp.stop();
		return Session.get('price') * (1 + taxRate);
	});

