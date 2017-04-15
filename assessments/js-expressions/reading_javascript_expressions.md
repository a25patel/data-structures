# Reading JavaScript Expressions

This quiz relates to the following standard:
W0002 - Write and Evaluate JavaScript Expressions

### Define each primitive data type in Javascript

### !challenge

* type: short-answer
* id: 1a77e81a-4a98-4927-9dea-f2c21ba61e79
* title: 5 Primitives JS

##### !question

What are the five primitive datatypes in JavaScript?

##### !end-question

##### !answer

/((?=.*\b[sS]tring)(?=.*\b[nN]umber)(?=.*\b[Bb]oolean)(?=.*\b[uU]ndefined)(?=.*\b[nN]ull)).+$/*  

##### !end-answer

##### !placeholder

List the 5 primitives here

##### !end-placeholder

### !end-challenge

## Data Type Identification

### !challenge

* type: multiple-choice
* id: f2a3e25e-7187-4304-9d0b-c75a226851ca
* title: Data Type Identification: Numbers

##### !question

Name the datatype for this expression:  

`5`


##### !end-question

##### !options


* Number
* Floating Point Number
* String
* NumberArray


##### !end-options

##### !answer

Number

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: fc219c0c-e24c-4606-a899-7ec45091e642
* title: Data Type Identification: Numbers

##### !question

Name the datatype for this expression:  

`5.5`

##### !end-question

##### !options


* Number
* Floating Point Number
* String
* NumberArray


##### !end-options

##### !answer

Number

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: a0800f51-b1a3-42c9-b1b4-09cb4c66ddef
* title: Data Type Identification: Numbers

##### !question

Name the datatype for this expression:  

`.3`

##### !end-question

##### !options


* Number
* Floating Point Number
* String
* NumberArray


##### !end-options

##### !answer

Number

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: b611ee2b-a8b4-489a-b45d-0eba10197f68
* title: Data Type Identification: Null Types

##### !question

Name the datatype for this expression:  

`null`

##### !end-question

##### !options


* None
* String
* null
* NoneType


##### !end-options

##### !answer

null

##### !end-answer

### !end-challenge


### !challenge

* type: multiple-choice
* id: 9d9a36a2-72b4-4d6c-a789-7c50a197bcd3
* title: Data Type Identification: Null Types

##### !question

Name the datatype for this expression:  

`undefined`

##### !end-question

##### !options


* None
* null
* undefined
* NoneType


##### !end-options

##### !answer

undefined

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 7712973c-b7e5-4fad-a6d8-0d936192b248
* title: Data Type Identification: String Types

##### !question

Name the datatype for this expression:  

`"Hello World"`

##### !end-question

##### !options


* String
* CharArray
* undefined
* Symbol


##### !end-options

##### !answer

String

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 1a640281-ace3-47b5-a174-163a8b2a6757
* title: Data Type Identification: String Types

##### !question

Name the datatype for this expression:  

`"Good evening, " + "007"`

##### !end-question

##### !options


* String
* CharArray
* Number
* Symbol


##### !end-options

##### !answer

String

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: ae35313e-909a-4890-962e-9883679a19fe
* title: Data Type Identification: Data Type Coercion

##### !question

Name the datatype for this expression:  

`(7 + "00")++`

##### !end-question

##### !options


* String
* Number
* undefined
* NaN


##### !end-options

##### !answer

Number

##### !end-answer

### !end-challenge



### !challenge

* type: paragraph
* id: cf20adce-1b26-4a51-941c-a37c82884134
* title: 6 Falsey Values

##### !question

What are the 6 falsey values in JavaScript?

##### !end-question

##### !placeholder

List the 6 falsey values here...

##### !end-placeholder

### !end-challenge

### Use logical operators

### !challenge

* type: multiple-choice
* id: 1cc26f03-0a47-4c53-924b-6262312381eb
* title: Logical Operators

##### !question

What does `true || false` evaluate to?

##### !end-question

##### !options


* `true`
* `false`


##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 773efc1e-b3f1-4ef1-9d6f-6b1fd9ce12a1
* title: Logical Operators

##### !question

What does `false || true && true` evaluate to?

##### !end-question

##### !options


* `true`
* `false`


##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge

### Use comparison operators

### !challenge

* type: multiple-choice
* id: bd3f1209-b8b1-4059-a3b0-05f2dce9fea7
* title: Logical Operators

##### !question

What will this evaluate to? `5 == '5'`

##### !end-question

##### !options


* `true`
* `false`



##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 0468885a-80a8-4f78-95fa-81ccef3d9d9e
* title: Logical Operators

##### !question

What will this evaluate to? `150 === "15" + '0'`

##### !end-question

##### !options


* `true`
* `false`


##### !end-options

##### !answer

`false`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 19a1a4c6-8821-441c-b742-5602883bc549
* title: Logical Operators

##### !question

What will this evaluate to? `1 != 'one'`

##### !end-question

##### !options


* `true`
* `false`


##### !end-options

##### !answer

`false`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: b8d4bc7a-a988-48ed-a301-99416a39e5d7
* title: Logical Operators

##### !question

What will this evaluate to? `'37 cats' === 37 + ' cats'`

##### !end-question

##### !options

* `true`
* `false`

##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: b01e24bc-06f0-4841-be98-977c22eddd3b
* title: Logical Operators

##### !question

What will this evaluate to? `undefined !== NaN`

##### !end-question

##### !options

* `true`
* `false`

##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge


### !challenge

* type: multiple-choice
* id: b251e6e3-e5c2-4330-91de-07507e9d2b6a
* title: Logical Operators

##### !question

What will this evaluate to? `500 < "501"`

##### !end-question

##### !options


* `true`
* `false`



##### !end-options

##### !answer

`true`

##### !end-answer

### !end-challenge


### !challenge

* type: multiple-choice
* id: 029325ea-ef89-42e5-b82f-d7cb343e7354
* title: Logical Operators

##### !question

What will this statement evaluate to?

```js
NaN === NaN
```

##### !end-question

##### !options


* `true`
* `false`



##### !end-options

##### !answer

`false`

##### !end-answer

### !end-challenge

### Perform Math operations with binary operators

### !challenge

* type: short-answer
* id: 7cd63e56-5875-43df-866f-f68f11872bcd
* title: Evaluate Math operations with Binary Operators

##### !question

What will this evaluate to?

```
true && 3 + 3 === 6 && false
```

##### !end-question

##### !answer

/[fF]alse/

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: b2621bae-5e2c-4615-acb1-2a02be42aedd
* title: Evaluate Math operations with Binary Operators

##### !question

What will this evaluate to?

```
false || 11 % 3 === 2 || (5 - 3) * 4 === 12
```

##### !end-question

##### !answer

/[tT]rue/

##### !end-answer

### !end-challenge

### !challenge

* type: paragraph
* id: 269be6da-6691-4e14-95af-97b8b9d7c700
* title: Evaluate Math operations with Binary Operators

##### !question

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 % x;
```

##### !end-question

### !end-challenge

### !challenge

* type: short-answer
* id: b810c853-376b-406c-99fb-2b40510d805b
* title: Evaluate Math operations with Binary Operators

##### !question

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 / (x * x * x * x);
```

##### !end-question

### !end-challenge

### Prefix / Postfix notation for integers

### !challenge

* type: paragraph
* id: 171b62d5-e7db-4732-8292-a980aeed7de0
* title: Perform Math operations with Unary operators

##### !question

What value will be returned for both x and y?

```js
var x = 7;
var y = x++;
```

##### !end-question

### !end-challenge

### !challenge

* type: paragraph
* id: 384b54f8-63fd-4eb2-ae5e-30f6577454c8
* title: Perform Math operations with Unary operators

##### !question

What value will be returned for both x and y?

```js
var x = 7;
var y = ++x;
```

##### !end-question

### !end-challenge

### Evaluate a statement using language Operator Precedence rules

### !challenge

* type: short-answer
* id: a98b9526-c905-44bb-82be-5ec2efcae8b5
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
5 + 5 * 3 + 7 * 9
```

##### !end-question

##### !answer

83

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 96011934-5943-4aaf-b6b3-9a7aa0cde121
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
6 * 6 / 3
```

##### !end-question

##### !answer

12

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: aa8d8a97-dd26-4780-9e7b-8e64508898db
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
5 * 6 % 3
```

##### !end-question

##### !answer

0

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 400dd2bf-1541-4ff8-a420-39e0f3abbcec
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
5 * 11 % 3
```

##### !end-question

##### !answer

1

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 97dcf68a-4b0f-4255-b62e-5bc095178072
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
(22 / 2) * 2 / 2 * 11
```

##### !end-question

##### !answer

121

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: d6db1195-8607-49e0-a832-c4e3a1e95bd1
* title: Evaluate a statement using language Operator Precedence rules

##### !question

What will the following statements return?

```
Math.pow(5 + 37 * 8, 0)
```

##### !end-question

##### !answer

1

##### !end-answer

### !end-challenge

### Perform String Concatenation

### !challenge

* type: code-snippet
* language: javascript
* id: cd752bb1-e524-47de-9b5a-09e83c048516
* title: Perform String Concatenation

### !question

Given these variables, create an expression that returns `'Hello World, Hello Universe'`.

```
var greeting = "Hello";
var place = "World";
var biggerPlace = "Universe";
```

### !end-question

### !placeholder

var greeting = "Hello";
var place = "World";
var biggerPlace = "Universe";

var allThePlaces = null;

### !end-placeholder

### !tests

```js
describe('allThePlaces', function() {

    it("allThePlaces to equal 'Hello World, Hello Universe'", function() {
      expect(allThePlaces, "allThePlaces doesn't have the correct value").to.eq('Hello World, Hello Universe')
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
* id: bc901abe-7477-43bc-ad41-a7075dfd5e50
* title: Perform String Concatenation

### !question

Given these variables, create an expression that returns `"99 little bugs in the code, 99 little bugs, take one down, patch it around, 106 little bugs in the code"`.

```
var count = 99;
var thing = "little bugs";
var container = "in the code";
var verb = "patch";
```

### !end-question

### !placeholder

var count = 99;
var thing = "little bugs";
var container = "in the code";
var verb = "patch";

var song = null;

### !end-placeholder

### !tests

```js
describe('song', function() {

    it("song to equal '99 little bugs in the code, 99 little bugs, take one down, patch it around, 106 little bugs in the code'", function() {
      expect(song, "song doesn't have the correct value").to.eq("99 little bugs in the code, 99 little bugs, take one down, patch it around, 106 little bugs in the code")
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
* id: 8402ea8e-f78f-4bf3-acdb-0c1ef283fe08
* title: Perform String Concatenation

### !question

Using the expression from the last question, change the variables so that our output would be `"99 bottles of beer on the wall, 99 bottles of beer, take one down, pass it around, 98 bottles of beer on the wall"`

### !end-question

### !placeholder

var count = 99;
var thing = "little bugs";
var container = "in the code";
var verb = "patch";

var song = null;

### !end-placeholder

### !tests

```js
describe('song', function() {

    it("song to equal '99 bottles of beer on the wall, 99 bottles of beer, take one down, pass it around, 98 bottles of beer on the wall'", function() {
      expect(song, "song doesn't have the correct value").to.eq("99 bottles of beer on the wall, 99 bottles of beer, take one down, pass it around, 98 bottles of beer on the wall")
    })
})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### Dimension Variables with `var`, `let`, `const`

### !challenge

* type: multiple-choice
* id: 2c045f47-ab70-45e0-a95
* title: Dimension Variables with `var`, `let`, `const`

##### !question

Given this code, should we use `var`, `let` or `const` with the variable `y`

```
var x = 5;
y = m * x + b;
```

##### !end-question

##### !options

* `const`
* `var`
* `let`

#####!end-options

##### !answer

`let`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 5d506aea-dbd2-471d-940
* title: Dimension Variables with `var`, `let`, `const`

##### !question
Given this code, should we use `var`, `let` or `const` with the variable `x`

```
x = 21;
while (x % 20 == 0) {
  x++
}
console.log(x)
```

##### !end-question

##### !options


* `var`
* `let`
* `const`

##### !end-options

##### !answer

`let`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 52dab553-8f6b-441e-8f5
* title: Dimension Variables with `var`, `let`, `const`

##### !question

Given this code, should we use `var`, `let` or `const` with the variable `i`

```
for (i=0; i<100; i++) {
  console.log(i);
}

```

##### !end-question

##### !options

* `var`
* `let`
* `const`

##### !end-options

##### !answer

`let`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 666526d6-3a74-463c-9162-5701808b52e9
* title: Dimension Variables with `var`, `let`, `const`

##### !question

Given this code, should we use `var`, `let` or `const` with the variable `multiplier`

```
multiplier = 3;
attendees = 60;

var cake = (attendees / 6) * multiplier;
var cupcake = 15 * multiplier;
var plates = attendees * multiplier;
```

##### !end-question

##### !options

* `var`
* `let`
* `const`

##### !end-options

##### !answer

`const`

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: aebc5454-4330-424f-9f9
* title: Dimension Variables with `var`, `let`, `const`

##### !question

Given this code, should we use `var`, `let` or `const` with the variable `express`

```
express = require('express')
```

##### !end-question

##### !options

* `var`
* `let`
* `const`

##### !end-options

##### !answer

`const`

##### !end-answer

### !end-challenge

### Identify Function, Object, Array and Primitive Literals

### !challenge

* type: multiple-choice
* id: e72fe58c-1ae0-4209-852d-bf4bb7643dee
* title: Identify Array Literals

##### !question

What type of literal expression is this:

```
[]
```

##### !end-question

##### !options


* Object
* Array
* String
* Primitive


##### !end-options

##### !answer

Array

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 5bad161f-6bbc-40a7-b577-0b9916733040
* title: Identify Object Literals

##### !question

What type of literal expression is this:

```
{}
```

##### !end-question

##### !options


* Object
* Array
* String
* For Loop


##### !end-options

##### !answer

Object

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: fd2fb311-b9bf-430f-82fe-a705adf96326
* title: Identify Function Literals

##### !question

What type of literal expression is this:

```
function () {}
```

##### !end-question

##### !options


* Primitive
* Object
* Function


##### !end-options

##### !answer

Function

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 633defce-4392-43cf-82d9-08be3c0869c6
* title: Identify Array Literals

##### !question

What type of literal expression is contained within the variable:

```
let colors = ["red", "orange", "blue"]
```

##### !end-question

##### !options


* Array
* String
* Color


##### !end-options

##### !answer

Array

##### !end-answer

### !end-challenge


### !challenge

* type: multiple-choice
* id: caba9738-7898-4488-9735-75950c7b8a9a
* title: Identify Object Literal

##### !question

What type of literal expression is contained within the variable:

```
let config = {
  semicolons: true,
  commas: true,
  dots: true,
  brackets: false,
  changeDefaults: false
}
```

##### !end-question

##### !options


* Object
* Config
* Bracket


##### !end-options

##### !answer

Object

##### !end-answer

### !end-challenge

### !challenge

* type: multiple-choice
* id: 5d12ac4e-79a4-4013-a26b-a4c06a126480
* title: Identify Function Literal

##### !question

What type of literal expression is contained within the variable:

```
const x = function () {
  if (arguments) {
    return {};
  }
  return ["cats", "tigers", "dogs", "wolves", "parrots", "dinosaurs", "pigs", "hogs", "trees", "ferns"];
}
```

##### !end-question

##### !options


* Options
* Function
* Animal
* Array


##### !end-options

##### !answer

Function

##### !end-answer

### !end-challenge
