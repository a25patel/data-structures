### !challenge

* type: code-snippet
* language: javascript
* id: 5aa0341d-0a64-4f3f-9b51-0875a032286d
* title: Validate Data and Access an Object

### !question

## Challenge 3: Object Access

Below you have three users. Write a function that validates the users have all of the data they're supposed to have:

1. The email address contains an "@" symbol.
2. The phone number is valid (###-###-####).
3. The user has a first and last name (has at least two names).
3. The user has an address that starts with a number, then has a street name made up of 1 or more words, then a comma, then a city made up of 1 or more words

If any of those aren't valid, return `false`.

```javascript
var user = {
	name : "Jenny Appleseed",
	phone : "555-656-2323",
	email: "j.appleseed@appleseedanddaughters.com",
	address : "123 Main street, anytown USA"
}

var user2 = {
	name : "Kerri Appleseed",
	phone : "555-456-3344",
	email: "k.appleseedappleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user3 = {
	name : "Sally Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user4 = {
	name : "Appleseed",
	phone : "555-344-6635",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

```

### !end-question

### !placeholder

function validateUser() {

}

### !end-placeholder

### !tests

```js

var user = {
	name : "Jenny Appleseed",
	phone : "555-656-2323",
	email: "j.appleseed@appleseedanddaughters.com",
	address : "123 Main street, anytown USA"
}

var user2 = {
	name : "Kerri Appleseed",
	phone : "555-456-3344",
	email: "k.appleseedappleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user3 = {
	name : "Sally Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user4 = {
	name : "Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

describe('validateUser', function() {

    it("returns true when given a valid user", function() {
      expect(validateUser(user), "Didn't return true for a valid user").to.eq(true)
    })

    it("returns false when given a user with an invalid email address", function() {
      expect(validateUser(user2), "email address was incorrect").to.eq(false)
    })

    it("returns false when given a user with an invalid phone number", function() {
      expect(validateUser(user3), "Phone number was incorrect").to.eq(false)
    })

    it("returns false when given a user with an invalid name", function() {
      expect(validateUser(user4), "name was incorrect").to.eq(false)
    })

})
```
### !end-tests

### !end-challenge
