# Checkpoint: Create Objects with State and Behavior

This checkpoint tells us you can Model and Create Objects with State and Behavior in JavaScript.

#### Cheatsheet

Make a new Class:
```javascript
var Classname = function(){};
```

Make a Method:
```javascript
Classname.prototype.methodName = function() {};
```

### !challenge

* type: code-snippet
* language: javascript
* id: adcf9deb-aead-4f87-ace4-048e19002b21
* title: Create Objects with State and Behavior

### !question

### The Cat
_Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur._

*   Create an object with the constructor invocation pattern: `Cat = function() {}` that represents a Cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness`
*   Next, write methods that increase and decrease those properties. Name them `feed`, `sleep`, and `pet`
*   Make the methods take **arguments** that increase or decrease arbitrary amounts set by given **parameters**
*   Write a method that returns the cat's overall status formatted like this:
```
Tiredness: 10
Hunger: 5
Loneliness: 3
Happiness: 12
```
*   Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't _want_ to be petted. Check out `Math.random()`! Then, write a test that runs the `pet()` method a few times to make sure that your cat will sometimes reject being petted.

### !end-question

### !placeholder

// Create your Cat class here

### !end-placeholder

### !tests

```js
describe('Cat',function () {
  var kitty;
  before(function () {
    kitty = new Cat();
  });

  it("should have tiredness, hunger, loneliness, and happiness properties", function () {
    expect(kitty.tiredness).to.be.a('number');
    expect(kitty.hunger).to.be.a('number');
    expect(kitty.loneliness).to.be.a('number');
    expect(kitty.happiness).to.be.a('number');
  });

  it("should have a feed method, which decreases hunger and increases happiness", function () {
    var hunger = kitty.hunger;
    var happiness = kitty.happiness;

    kitty.feed();

    expect(kitty.hunger).to.be.below(hunger);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a feed method that accepts an argument (a number), which decreases hunger by an arbitrary amount", function(){
    var hunger = kitty.hunger;
    var happiness = kitty.happiness;

    kitty.feed(5);

    expect(kitty.hunger).to.equal(hunger - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a pet method, which decreases loneliness and increases happiness", function () {
    var loneliness = kitty.loneliness;
    var happiness = kitty.happiness;

    kitty.pet();

    expect(kitty.loneliness).to.be.below(loneliness);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a pet method that accepts an argument (a number), which decreases loneliness by an arbitrary amount", function(){
    var loneliness = kitty.loneliness;
    var happiness = kitty.happiness;

    kitty.pet(5);

    expect(kitty.loneliness).to.equal(loneliness - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a sleep method, which decreases tiredness and increases happiness", function () {
    var tiredness = kitty.tiredness;
    var happiness = kitty.happiness;

    kitty.sleep();

    expect(kitty.tiredness).to.be.below(tiredness);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a sleep method that accepts an argument (a number), which decreases tiredness by an arbitrary amount", function(){
    var tiredness = kitty.tiredness;
    var happiness = kitty.happiness;

    kitty.sleep(5);

    expect(kitty.tiredness).to.equal(tiredness - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a .status() method that returns it's status as a string, including all state information, along with property names", function(){
    var status = kitty.status().toLowerCase();

    //really just checks that all the names and values are in there
    expect(status).to.contain("loneliness");
    expect(status).to.contain("tiredness");
    expect(status).to.contain("hunger");
    expect(status).to.contain("happiness");

    expect(status).to.contain(kitty.loneliness);
    expect(status).to.contain(kitty.tiredness);
    expect(status).to.contain(kitty.hunger);
    expect(status).to.contain(kitty.happiness);
  });

});
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
