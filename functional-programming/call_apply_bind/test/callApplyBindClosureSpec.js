var methods = require("../script");
var expect = require("chai").expect;
var sinon = require("sinon");



describe('#once', function() {
  it('should only run a user-defined function if it hasn\'t been run before', function() {
    var age = 27;
    var growUp = methods.once(function() {
      age += 1;
    });

    growUp();
    growUp();

    expect(age).to.equal(28);
  });
});

describe('#delay', function() {
  var countDown;

  beforeEach(() => countDown = sinon.useFakeTimers());
  afterEach(() => countDown.restore());

  it('should only execute the function after the specified wait time', function() {
    var cb = sinon.spy();
    methods.delay(cb, 100);

    countDown.tick(99);

    expect(cb.notCalled).to.equal(true);

    countDown.tick(1);

    expect(cb.calledOnce).to.equal(true);
  });

  it('should have successfully passed function arguments in', function() {
    var cb = sinon.spy();

    methods.delay(cb, 100, "a", 5,10,[]);
    countDown.tick(100);

    expect(cb.calledWith("a",5,10,[])).to.equal(true);
  });
});

describe("#simpleBind", function(){
  function displayInfo(favColor){
    return `Your name is ${this.firstName} and your favorite color is ${favColor}`;
  }
  var o = {
    firstName: "Elie"
  };

  it("returns a function", function(){
    expect(typeof methods.simpleBind(displayInfo,o)).to.equal("function");
  });

  it("includes the arguments passed when called", function(){
    var data = methods.simpleBind(displayInfo, o);
    expect(data("purple")).to.equal("Your name is Elie and your favorite color is purple");
  });
});

describe("#simpleCurry", function(){
  it("Curries a function with two arguments into two curried functions f(g(x))", function(){
    function add(a,b){
      return a+b;
    }

    var s = methods.simpleCurry(add);
    expect(typeof s).to.equal("function");
    expect(s(4)(3)).to.equal(7);
  });
});
