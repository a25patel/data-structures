## Accumulator Pattern - Arrays, Level 1

This set of Challenges deals with the Accumulator Pattern, one of the first patterns you'll learn as a new programmer.


### !challenge
* type: code-snippet
* language: javascript
* id: 04386bad-46b4-4fc8-9931-eeb33bc90e4e
* title: JS arrayOfNumbers

### !question
## Array of Numbers

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

- If you pass `1` it should return `[1]`
- If you pass `3` it should return `[1,2,3]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('arrayOfNumbers', function() {

  it("returns an empty array when passed 0", function() {
    expect(arrayOfNumbers(0)).to.deep.eq([])
  })

  it("returns an array of all of the numbers between 1 and that number, inclusive", function() {
    expect(arrayOfNumbers(1)).to.deep.eq([1])
    expect(arrayOfNumbers(2)).to.deep.eq([1,2])
    expect(arrayOfNumbers(3)).to.deep.eq([1,2,3])
    expect(arrayOfNumbers(4)).to.deep.eq([1,2,3,4])
    expect(arrayOfNumbers(5)).to.deep.eq([1,2,3,4,5])
    expect(arrayOfNumbers(6)).to.deep.eq([1,2,3,4,5,6])
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 6b63139a-599f-422a-b363-ad5fca45cfd4
* title: Processing Arrays with Numbers

### !question

* Define a function named sum that takes in one argument.
  * `arr` (array of numbers)
* Return the sum of all of the numbers in the array.
  * For example, given `[1, 2, 3, 4]`, then return `10`. If the array is empty, return `0`.

* Define a function named product that takes in one argument.    
  * `arr` (array of numbers)
* Return the product of all of the numbers in the array.
  * For example, given `[1, 2, 3, 4]`, then return `24`. If the array is empty, return `1`.

* Define a function named `filterPassingGrades` that takes in one argument.
  * `grades` (array of numbers)
* Return a new array with any grade less than `70` filtered out.
  * For example, given `[88, 67, 70, 92, 53]`, then return `[88, 70, 92]`.

* Define a function named `replace` that takes in three arguments.
  * `arr` (array of numbers)
  * `from` (number)
  * `to` (number)
* Return a new array of numbers where all `from` elements are replaced with `to`.
  * For example, given `[1, 3, 2, 1, 3]`, `1`, and `4`, then return `[4, 3, 2, 4, 3]`.

* Define a function named max that takes in one argument.
  * `arr` (array of numbers)
* Return the maximum number in the array.
  * For example, given `[1, 2, -3, 4]`, then return `4`. If the array is empty, return `-Infinity`.

* Define a function named `min` that takes in one argument.
  * `arr` (array of numbers)
* Return the minimum number in the array.
  * For example, given `[1, 2, -3, 4]`, then return `-3`. If the array is empty, return `Infinity`.

* Define a function named `mean` that takes in one argument.
  * `arr` (array of numbers)
* Return the mean (i.e. average) of all of the numbers in the array.
  * For example, given `[1, 2, 6]`, then return `3`. If the array is empty, return `null`.

* Define a function named median that takes in one argument.
  * `arr` (array of numbers)
* Return the median of all of the numbers.
  * For example, given `[1, 2, 6]`, then return `2`.
  * If given `[1, 2, 6, 8]`, return `4`.
  * If the array is empty, return `null`.

* Tip: Use Google to learn more about calculating the median.
* Tip: The given array may not be sorted.

Documentation:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

### !end-question

### !placeholder

function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
   sum += arr[i];
  }
  return sum;
}

function product(arr) {
  // YOUR CODE HERE
}

function filterPassingGrades(arr) {
  // YOUR CODE HERE
}

function replace(arr, from, to) {
  // YOUR CODE HERE
}

function max(arr) {
  // YOUR CODE HERE
}

function min(arr) {
  // YOUR CODE HERE
}

function mean(arr) {
  // YOUR CODE HERE
}

function median(arr) {
  // YOUR CODE HERE
}

### !end-placeholder

### !tests
describe('sum', function() {
  it('adds a bunch of numbers', function() {
    expect(sum([])).to.eq(0);
    expect(sum([1, 2, 3, 4])).to.eq(10);
    expect(sum([1, -1, 2, -3])).to.eq(-1);
  });
});

describe('product', function() {
  it('multiplies bunch of numbers', function() {
    expect(product([])).to.eq(1);
    expect(product([1, 2, 3, 4])).to.eq(24);
    expect(product([1, 2, 3, 4, 0])).to.eq(0);
  });
});

describe('filterPassingGrades', function() {
  it('filters all passing grades', function() {
    expect(filterPassingGrades([])).to.deep.eq([]);
    expect(filterPassingGrades([100, 45, 90, 60])).to.deep.eq([100, 90]);
    expect(filterPassingGrades([100, 45, 70])).to.deep.eq([100, 70]);
    expect(filterPassingGrades([0, 45, 40])).to.deep.eq([]);
  });
});

describe('replace', function() {
  it('replaces values in an array with another', function() {
    expect(replace([1, 3, 2, 1, 3], 1, 4)).to.deep.eq([4, 3, 2, 4, 3]);
    expect(replace([], 1, 4)).to.deep.eq([]);
    expect(replace([1, 3, 2, 1, 3], 4, 1)).to.deep.eq([1, 3, 2, 1, 3]);
  });
});

describe('max', function() {
  it('calculates the max number in an array', function() {
    expect(max([1, 2, 3, 4, 3])).to.eq(4);
    expect(max([1, 2, 3, -4, 3])).to.eq(3);
    expect(max([])).to.eq(-Infinity);
  });
});

describe('min', function() {
  it('calculates the min number in an array', function() {
    expect(min([1, 2, 3, 4, 3])).to.eq(1);
    expect(min([1, 2, 3, -4, 3])).to.eq(-4);
    expect(min([])).to.eq(Infinity);
  });
});

describe('mean', function() {
  it('calculates the mean of an array', function() {
    expect(mean([1, 2, 3, 4, 5])).to.eq(3);
    expect(mean([1, 2, 3, -4, 3])).to.eq(1);
    expect(mean([])).to.eq(null);
  });
});

describe('median', function() {
  it('calculates the median of an array', function() {
    expect(median([1, 1, 2, 3, 4, 5, 6])).to.eq(3);
    expect(median([1, 1, 2, 3, 4, 5])).to.eq(2.5);
    expect(median([1, 6, 5, 3, 4, 2, 1])).to.eq(3);
    expect(median([])).to.eq(null);
  });
});


### !end-tests

### !explanation

### !end-explanation

### !end-challenge


### !challenge
* type: code-snippet
* language: javascript
* id: b56c58ae-5897-4c5e-8bd4-605a0269e81c
* title: JS multiplyNumbers

### !question
## Multiply Numbers

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call `multiplyNumbers([1,2,3], 0)` you'd get `[0,0,0]`
- if you call `multiplyNumbers([1,2,3], 5)` you'd get `[5,10,15]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('multiplyNumbers', function() {

  it("returns 0 when the input is empty", function() {
    expect(multiplyNumbers([], 3), "Default value is incorrect").to.deep.eq([])
  })

  it("doubles every number in the given array", function() {
    expect(multiplyNumbers([1,2,3], 3)).to.deep.eq([3,6,9])
    expect(multiplyNumbers([10,20,30,40], 5)).to.deep.eq([50,100,150,200])
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge

### !challenge
* type: code-snippet
* language: javascript
* id: 09d9e517-43d1-40fb-987e-ce63a4a58af5
* title: JS createRange

### !question
## Create Range
Write function named createRange that will take a number and a default value and return an array of that many values

Example:

- if you pass it `4` and `"Hello"` then it should return `["Hello", "Hello", "Hello", "Hello"]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('createRange', function() {

  it("returns an empty array when the input is empty", function() {
    expect(createRange(0), "Default value is incorrect").to.deep.eq([])
  })

  it("creates an array of the specified length with the specified values", function() {
    expect(createRange(4, "a")).to.deep.eq(["a", "a", "a", "a"])
    expect(createRange(7, "z")).to.deep.eq(["z", "z", "z", "z", "z", "z", "z"])
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge



### !challenge
* type: code-snippet
* language: javascript
* id: c8e66cee-4411-4c90-b791-36e0ae18a115
* title: JS doubleNumbers

### !question
## Double Numbers
Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example:

- if you pass it `[1,2,3]` then it should return `[2,4,6]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('doubleNumbers', function() {

  it("returns an empty array when the input is empty", function() {
    expect(doubleNumbers([]), "Default value is incorrect").to.deep.eq([])
  })

  it("doubles every number in the given array", function() {
    expect(doubleNumbers([1,2,3])).to.deep.eq([2,4,6])
    expect(doubleNumbers([10,20,30,40])).to.deep.eq([20,40,60,80])
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 4718db22-4ea5-4040-a344-c38977f7f868
* title: Processing Arrays with Strings

### !question

* Define a function named `concatenate` that takes in one argument.
  * `arr` (array of strings)
* Return the concatenation of all the strings in the array.
 * For example, given `['hello', 'my', 'name', 'is', 'ken']`, then return `'hellomynameisken'`. If the
array is empty, return `''`.


* Define a function named `repeat` that takes in two arguments.
  * `str` (string)
  * `times` (number)
* Return a new string containing times copies of the input `str`.
  * For example, given `'hi'` and `4`, then return `'hihihihi'`.

### !end-question

### !placeholder
function concatenate(arr) {

}

function repeat(str, times) {

}

### !end-placeholder

### !tests

describe('concatenate', function() {
  it('concatenates an array of strings', function() {
    expect(concatenate([])).to.eq('');
    expect(concatenate(['Hello', 'world', 'Seattle'])).to.eq('HelloworldSeattle');
  });
});

describe('repeat', function() {
  it('repeats a string multiple times', function() {
    expect(repeat('hi', 4)).to.eq('hihihihi');
    expect(repeat('ken', 3)).to.eq('kenkenken');
    expect(repeat('hello', 1)).to.eq('hello');
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge


### !challenge
* type: code-snippet
* language: javascript
* id: 6c63e677-a907-4673-9d88-6faaac8da711
* title: JS toSentence

### !question
## To Sentence

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

- If you pass `["Sue", "Will"]` it should return `"Sue and Will"`
- If you pass `["Sue", "Will", "Rachel"]` it should return `"Sue, Will and Rachel"`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('toSentence', function() {

  it("returns an empty string when passed an empty array", function() {
    expect(toSentence([])).to.deep.eq("")
  })

  it("returns a string with the elements joined by a comma, with the last element separated by 'and'", function() {
    expect(toSentence(["cat", "bird"])).to.deep.eq("cat and bird")
    expect(toSentence(["a", "b", "c"])).to.deep.eq("a, b and c")
    expect(toSentence(["a", "b", "c", "d"])).to.deep.eq("a, b, c and d")
  })

  it("does not use .join", function() {
    expect(toSentence.toString()).to.not.match(/\.join/)
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge


### !challenge
* type: code-snippet
* language: javascript
* id: fd89f330-e171-4c77-a68e-39060795541d
* title: JS acronym

### !question
## Acronym

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

- If you pass `["Sue", "Will"]` it should return `"SW"`
- If you pass `["Java", Script", "Object", "Notation"]` it should return `"JSON"`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('acronym', function() {

  it("returns an empty string when passed an empty array", function() {
    expect(acronym([])).to.deep.eq("")
  })

  it("returns a string that's an acronym of the items of the array", function() {
    expect(acronym(["cat", "bird"])).to.deep.eq("cb")
    expect(acronym(["how", "now", "brown", "cow"])).to.deep.eq("hnbc")
  })

})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge

### !challenge
* type: code-snippet
* language: javascript
* id: 79037381-4769-4fcb-b9a5-ba3e3c67582e
* title: JS interleave

### !question
## Interleave
Write function named interleave that will take two arrays and interleaves them

Example:

- if you pass it `["a", "b", "c"]` and `["d", "e", "f"]` then it should return `["a", "d", "b", "e", "c", "f"]`

NOTE: you can assume each input will be the same length
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('interleave', function() {
  it("returns an empty array when the inputs are empty", function() {
    expect(interleave([], []), "Default value is incorrect").to.deep.eq([])
  })

  it("interleaves elements from two arrays when input is present", function() {
    expect(interleave(["a", "b", "c"], ["x", "y", "z"])).to.deep.eq(["a", "x", "b", "y", "c", "z"])
    expect(interleave([1,2,3,4], [5,6,7,8])).to.deep.eq([1,5,2,6,3,7,4,8])
  })
})
```
### !end-tests

### !explanation

### !end-explanation
### !end-challenge
