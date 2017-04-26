### !challenge

* type: code-snippet
* language: javascript
* id: 5aa0341d-0a64-4f3f-9b51-0875a032286d
* title: Validate Data and Access an Object

### !question

Below you have four users. Write a function that validates the users have all of the data they're supposed to have:

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


### !challenge

* type: code-snippet
* language: javascript
* id: 765a2bfe-f02a-4b9a-9d39-023900bae8a6
* title: Nested Object Access

### !question

## Challenge 5: Nested Object Access
Given the following object:

```javascript

var library = {
	city: "San Francisco",
	name: "SF Public",
	bestBook: {
			title: "JavaScript for Dummies",
			company: {
				name: "BookCo",
				employees: {
					writers: [
						{
							firstName: "Bob",
							lastName: "Marley",
						},
            {
              firstName: "Jerry",
              lastName: "Garcia"
            }
					],
					publisher: {
						firstName: "Bob",
						lastName: "Weir"
					}
				}
			}
		}
	}

```

Inside of the `statementPractice` function, write statements that `console.log`s the following:

 1. The city of the library

 2. The name of the library

 3. The bestBook in the library

 4. The title of the bestBook in the library

 5. The name of the company of the bestBook in the library

 6. The first name of the publisher of the company of the bestBook in the library

 7. The last name of the second writer of the bestBook in the library

### !end-question

### !placeholder

var library = {
	city: "San Francisco",
	name: "SF Public",
	bestBook: {
			title: "JavaScript for Dummies",
			company: {
				name: "BookCo",
				employees: {
					writers: [
						{
							firstName: "Bob",
							lastName: "Marley",
						},
            {
              firstName: "Jerry",
              lastName: "Garcia"
            }
					],
					publisher: {
						firstName: "Bob",
						lastName: "Weir"
					}
				}
			}
		}
	}

function statementPractice(library) {

}


### !end-placeholder

### !tests

```js
var sinon = require('sinon');
describe('Nested Object Access', function() {

  before(function () {
    this.cStub = sinon.stub(console, "log");
    statementPractice(library);
  });
  after(function () {
    this.cStub.restore();
  });

  it("Logs the city of the library", function() {
    expect(console.log.getCall(0).args[0], "First call is incorrect").to.eq("San Francisco");
  })

  it("Logs the name of the library", function() {
    expect(console.log.getCall(1).args[0], "Second call is incorrect").to.eq("SF Public");
  })

  it("Logs the bestBook in the library", function() {
    expect(console.log.getCall(2).args[0], "Third call is incorrect").to.deep.eq({
  			title: "JavaScript for Dummies",
  			company: {
  				name: "BookCo",
  				employees: {
  					writers: [
  						{
  							firstName: "Bob",
  							lastName: "Marley",
  						},
              {
                firstName: "Jerry",
                lastName: "Garcia"
              }
  					],
  					publisher: {
  						firstName: "Bob",
  						lastName: "Weir"
  					}
  				}
  			}
  		});
  })

  it("Logs title of the bestBook in the library", function() {
    expect(console.log.getCall(3).args[0], "Fourth call is incorrect").to.eq("JavaScript for Dummies");
  })

  it("Logs the name of the company of the bestBook in the library", function() {
    expect(console.log.getCall(4).args[0], "Fifth call is incorrect").to.eq("BookCo");
  })

  it("Logs the first name of the publisher of the company of the bestBook in the library", function() {
    expect(console.log.getCall(5).args[0], "Sixth call is incorrect").to.eq("Bob");
  })

  it("Logs the second writer's last name of the bestBook in the library", function() {
    expect(console.log.getCall(6).args[0], "Seventh call is incorrect").to.eq("Garcia");
  })

})
```
### !end-tests

### !end-challenge



### !challenge

* type: code-snippet
* language: javascript
* id: 6e060852-3864-4804-87a9-a98d09bbd48c
* title: Data Structures:Arrays, Data Structures:Objects, Abstract Data Modeling

### !question

## Challenge 6: Arrays in Objects

Below is a Model of a recipe:

```javascript
var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"ramekins",
		"oven",
		"measuring cups"
	]
}
```

Write statements that do the following:

 1. Write a function called `getIngredients(recipe)`. Return our Crème Brûlée's ingredients like so:
 ```javascript
"Ingredients: eggs, heavy cream, vanilla pods"
 ```

 2. Write a function called `getCookwares(recipe)`. Return our Crème Brûlée's cookwares like so:
 ```javascript
"Cookware Required: mixing bowl, whisk, ramekins, oven, measuring cups"
 ```

 3. Write a function called `getFirstIngredient(recipe)`. Return the first item in our Crème Brûlée's ingredients like so:
 ```javascript
 "Start with: eggs"
 ```

 4. Write a function called `getNthCookware(recipe, n)`. Return the cookware item at the index of `n` in our Crème Brûlée's cookwares like so:

 ```javascript
 getNthCookware(cremeBrulee, 3)
 > "ramekins"
 ```

 5. Write a function called `addIngredient(recipe, ingredient)`. Adds an ingredient to our object like so: adding sugar to our Crème Brûlée's ingredients:
 ```javascript
 addIngredient(cremeBrulee, "sugar")
 [ "eggs", "heavy cream", "vanilla pods", "sugar"]
 ```

 6. Write a function called `editIngredient` . It should change the ingredient at the index specified to the string in the third argument.
 Change "eggs" in our Crème Brûlée's ingredients to "egg yolks":
 ```javascript
 editIngredient(cremeBrulee, 0, "Egg Yolks")
 [ "egg yolks", "heavy cream", "vanilla pods", "sugar"]
 ```

### Bonus:
*(the nefarious rival chef!)*   

Make a function called `spoiled(recipe)` that takes in a recipe like the `cremeBrulee` object, and adds 'rotten' in front of all of the ingredients.

### !end-question

### !placeholder

var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"oven",
    "ramekins",
		"measuring cups"
	]
}




### !end-placeholder

### !tests

```js
var sinon = require('sinon');
describe('Arrays in Objects', function() {

  before(function () {
    this.cStub = sinon.stub(console, "log");
  });
  after(function () {
    this.cStub.restore();
  });

  it("getIngredients Outputs the recipe's ingredients", function() {
    expect(getIngredients(cremeBrulee), "getIngredients is incorrect").to.eq("Ingredients: eggs, heavy cream, vanilla pods");
  })

  it("getCookwares Outputs the recipe's cookware", function() {
    expect(getCookwares(cremeBrulee), "getCookwares is incorrect").to.eq("Cookware Required: mixing bowl, whisk, ramekins, oven, measuring cups");
  })

  it("getFirstIngredient Outputs the recipe's first ingredient", function() {
    expect(getFirstIngredient(cremeBrulee), "getFirstIngredient is incorrect").to.eq("Start with: eggs");
  })

  it("getNthCookwareOutputs the recipe's cookware part", function() {
    expect(getNthCookware(cremeBrulee, 3), "getNthCookware is incorrect").to.eq("ramekins");
  })

  spoiled(cremeBrulee)
  //rivalChef logic
  if (cremeBrulee.ingredients[0] == "rotten egg yolks") {
    it("the nefarious chef has struck!", function() {
      expect(cremeBrulee.ingredients[0], "rotten ingredients check").to.eq("rotten egg yolks");
    })

    it("has sugar in the ingredients of the the Creme Brulee", function() {
      expect(cremeBrulee.ingredients[3], "rotten ingredients check").to.eq("rotten sugar");
    })

    it("has sugar in the ingredients of the the Creme Brulee", function() {
      expect(cremeBrulee.ingredients[0], "rotten ingredients check").to.eq("rotten egg yolks");
    })
  } else {
    it("addIngredient adds sugar in the ingredients of the the Creme Brulee", function() {
      addIngredient(cremeBrulee, "sugar")
      expect(cremeBrulee.ingredients[3], "addIngredient is incorrect").to.eq("sugar");
    })

    it("editIngredient sugar in the ingredients of the the Creme Brulee", function() {
      editIngredient(cremeBrulee, 0, "egg yolks")
      expect(cremeBrulee.ingredients[0], "editIngredient is incorrect").to.eq("egg yolks");
    })
  }



})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
