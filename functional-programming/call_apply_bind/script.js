// FIX THE BROKEN CODE (add a comment with what is wrong as well)

var obj = {
  firstName: "Matt",
  sayHi: function(){
    setTimeout(function(){
      console.log(`Hi ${this.firstName}!`);
    },1000);
  }
};


// simpleBind takes in a function and a thisArg and returns a function with the thisArg bound to that function.
// Remember to think about arguments being passed to this function!

function simpleBind(fn, thisArg){

}

// Creates a version of the function that can only be called one time.
// Repeated calls to the modified function will have no effect, returning the value from the original call.
// Useful for initialization functions, instead of having to set a boolean flag and then check it later.

// http://underscorejs.org/#once
function once (func) {

}


// Much like setTimeout, delay invokes function after wait milliseconds.
// If you pass the optional arguments, they will be forwarded on to the function when it is invoked.

// http://underscorejs.org/#delay
function delay(func, wait) {

}

//BONUS:
// This is really difficult, save it for when you feel very confident.
// This function should take in a function that takes two arguments
// It should take one argument, and should return a function that takes one argument
// It should then call the original function that was passed in to simpleCurry,
// with the two arguments the first function took.
function simpleCurry(fn){

}

// You should be able to do this:
// var curriedFunction = simpleCurry(function (num1, num2) { return num1 + num2 })
// curriedFunction(3)(5) // returns 8
// 
module.exports = {
  once,
  delay,
  simpleBind,
  simpleCurry,
};
