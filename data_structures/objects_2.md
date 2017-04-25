### !challenge

* type: code-snippet
* language: javascript
* id: 49a73097-5c3e-4b90-a4b0-5da79c146ef0
* title: Use Objects as Hash Maps to quickly check for a value, use `delete`

### !question

# Challenge 4: Objects as Hash Maps

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
* id: abb4c678-865f-4633-8854-ad8120a4f74d
* title: Object References

### !question

## Challenge 7: Objects in Arrays in Objects

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
