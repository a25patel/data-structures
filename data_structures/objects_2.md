# JavaScript Objects Level 2

### !challenge
* type: code-snippet
* language: javascript
* id: 243b94dc-a643-4dfd-b1bc-10127bc39b95
* title: JS letterCount

### !question
## Letter Count

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

- If you pass `"Yo"` it should return `{Y: 1, o: 1}`
- If you pass `"Hello"` it should return `{"H": 1, "e": 1, "l": 2, "o": 1}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('letterCount', function() {

  it("returns an empty object when given an empty string", function() {
    expect(letterCount(""), "Default value is incorrect").to.deep.eq({})
  })

  it("returns an object that maps letters to the number of occurrences", function() {
    expect(letterCount("up")).to.deep.eq({u: 1, p: 1})
    expect(letterCount("Hello")).to.deep.eq({H: 1, e: 1, l: 2, o: 1})
    expect(letterCount("aaa")).to.deep.eq({a: 3})
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
* id: 1fec2f7c-8bfd-444b-8d13-5dc7a358d1e7
* title: JS index

### !question
## Index

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

- If you pass `[{id: 1, name: "Joe"}, {id: 2, name: "Sue"}]` it should return:
  ```js
  {
    1: {
      id: 1,
      name: "Joe"
    },
    2: {
      id: 2,
      name: "Sue"
    }
  }
  ```
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('index', function() {

  it("returns an empty object when passed an empty array", function() {
    expect(index([], 'id')).to.deep.eq({})
  })

  it("returns an object indexed by the given property", function() {
    expect(index([{id: 1, name: "Will"}, {id: 2, name: "Sue"}], 'id')).to.deep.eq({
      1: {id: 1, name: "Will"},
      2: {id: 2, name: "Sue"},
    })

    expect(index([{name: "Will", age: 32}, {name: "Sue", age: 33}], 'name')).to.deep.eq({
      'Will': {name: "Will", age: 32},
      'Sue':  {name: "Sue", age: 33},
    })
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
* id: 2e4630f6-b3a3-4dfd-b8e8-cfc76e83be57
* title: JS invert

### !question
## Invert

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

- If you pass `{id: 1, name: "Joe"}` it should return `{1: "id", Joe: "name"}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('invert', function() {

  it("returns an empty object when passed an empty object", function() {
    expect(invert({})).to.deep.eq({})
  })

  it("returns an object where the keys and values have been swapped", function() {
    expect(invert({a: "1", b: "2", c: "3"})).to.deep.eq({1: "a", 2: "b", 3: "c"})
    expect(invert({"hello": "world"})).to.deep.eq({world: "hello"})
  })

  it("does not use Object.keys or Object.values", function() {
    expect(invert.toString()).to.not.match(/Object\.keys|Object\.values/)
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
* id: 49a73097-5c3e-4b90-a4b0-5da79c146ef0
* title: Use Objects as Hash Maps to quickly check for a value, use `delete`

### !question

The following objects represent hands in "go fish". The keys are cards that are present in the card. Write a function that looks in the hands for the existence of a card. Remember, in Go Fish, one player says to the other- "Got any 3s?" and the player has to give up any threes, regardless of suit. The function should return false if the is not present, and return true *and delete the property from the card* if it is found (representing the loss of the card.)

```javascript
var fish_hand1 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand2 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand3 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}
```

### !end-question

### !placeholder

function goFish(card, hand) {

}

### !end-placeholder

### !tests

```js

var fish_hand = {
	"K_hearts" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"4_spades" : true,
	"3_clubs" : true
}

describe('goFish', function() {

    it("returns true and removes the card from the hand when given a 4 and when given a hand with 4 present", function() {
      expect(goFish("4", fish_hand)).to.eq(true)
      expect(fish_hand["4_spades"]).to.be.undefined;
    })

    it("returns false when given a 5 and when given a hand with 5 present", function() {
      expect(goFish("5", fish_hand)).to.eq(false)
    })

    it("returns true and removes the card from the hand when given a K and when given a hand with K present", function() {
      expect(goFish("K", fish_hand)).to.eq(true)
      expect(fish_hand["K_hearts"]).to.be.undefined;
    })

})
```
### !end-tests

### !end-challenge

### !challenge
* type: code-snippet
* language: javascript
* id: 9b80bc28-19e9-48c3-909b-df735279e5cd
* title: JS addSignature

### !question
## Add Signature

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

- If you pass `{"contract": "foo"}, "Fred"` it should return `{"contract-signed": "foo - Fred"}`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('addSignature', function() {

  it("returns an empty object when passed an empty object", function() {
    expect(addSignature({})).to.deep.eq({})
  })

  it("returns an object where the keys have '-signed' appended", function() {
    let input = {
      "Contract": "blah blah"
    }
    let expected = {
      "Contract-signed": "blah blah - Joe"
    }

    expect(addSignature("Joe", input)).to.deep.eq(expected)

    input = {
      "Agreement": "something",
      "Code of Conduct": "blah blah"
    }
    expected = {
      "Agreement-signed": "something - Beth",
      "Code of Conduct-signed": "blah blah - Beth"
    }

    expect(addSignature("Beth", input)).to.deep.eq(expected)
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
* id: abb4c678-865f-4633-8854-ad8120a4f74d
* title: Object References

### !question

Write a function that does the following:

1. `findFriends(chatroom)` Adds a new property to each user called `friends` that is an array of every user in the chatroom except the user that the post belongs to.  *Do not re-write it manually!*

2. Write a function called `renderChat` that outputs a chatroom like so:

```
userName: message text
userName: message text
```

3. Write a function called `getUserLog` that displays all of the chats by a single user, given the chatrooms to search.

### !end-question

### !placeholder
// users
var tammy = {
 name: "Tammy",
 awayStatus: "Off to school"
}

var tom = {
 name: "Tom",
 awayStatus: "Learning JavaScript brb in 6 months lol"
}

var zorro = {
 name: "Zorro",
 awayStatus: "Let's crush it"
}

var jorge = {
 name: "Jorge",
 awayStatus: "sleeping "
}

var victoria = {
 name: "Victoria",
 awayStatus: "what is this box for"
}

var bobo = {
 name: "Bobo",
 awayStatus: "lunch || coding"
}

// array of chat messages
var general = [
 { user: tammy, message: "I did it!" },
 { user: tom, message: "seriously?!" },
 { user: zorro, message: "stack overflow fails again" },
 { user: jorge, message: "good warmup today" },
 { user: victoria, message: "yay!" },
 { user: bobo, message: "Picking up some subway for lunch" }
]

var random = [
 { user: tom, message: "machop is the best pokemon because" },
 { user: zorro, message: "look at this cat you guys" },
 { user: bobo, message: "I miss the 90s" },
 { user: jorge, message: "sometimes im wistful lol" },
 { user: tammy, message: "omg gifs" },
 { user: tammy, message: "moar gifs" },
 { user: tammy, message: "all of the gifs" },
 { user: victoria, message: "im gonna go home, i got that flu that's going around" }
]

function findFriends(chatroom) {

}

function getUserLog(user, arrayOfChatrooms) {

}

function renderChat(chatroom) {

}

### !end-placeholder

### !tests

```js

describe('stuff', function() {

    it("Users have Friends", function() {
      findFriends(general);
      expect(bobo.friends).to.deep.include.members([zorro, jorge, tom, tammy]);
      expect(zorro.friends).to.deep.include.members([bobo, jorge, tom, tammy]);
      expect(jorge.friends).to.deep.include.members([bobo, zorro, tom, tammy]);
      expect(tom.friends).to.deep.include.members([bobo, zorro, jorge, tammy]);
      expect(tammy.friends).to.deep.include.members([bobo, zorro, jorge, tom]);
    })

    it("renderChat renders the chatroom", function() {

      expect(renderChat(random), "chatroom rendered incorrectly").to.eq(`Tom: machop is the best pokemon because
Zorro: look at this cat you guys
Bobo: I miss the 90s
Jorge: sometimes im wistful lol
Tammy: omg gifs
Tammy: moar gifs
Tammy: all of the gifs
Victoria: im gonna go home, i got that flu that's going around`);

    })

    it("getUserLog logs all the posts from all chatrooms", function() {
      expect(getUserLog(tammy, [general, random]), "Default value is incorrect").to.deep.include.members([
        { user: tammy, message: "omg gifs" },
        { user: tammy, message: "moar gifs" },
        { user: tammy, message: "all of the gifs" },
        { user: tammy, message: "I did it!" }
      ])
    })

})
```
### !end-tests

### !end-challenge
