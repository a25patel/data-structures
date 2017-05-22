# JavaScript OOP Checkpoint


## Cheatsheet

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

### !challenge

* type: code-snippet
* language: javascript
* id: feb03b5b-e42f-4f28-b5bd-98e037fe6bba
* title: Problem-Solve using a common Design Pattern

### !question

### The Book List

_An object-oriented book-list!_

This booklist program should allow you to keep track of all the books you've read. You should be able to always find out what book you last read, what book you're reading now, and what book you want to read next. You should also be able to mark your current book as "finished", which will update all of the information about your current reading accordingly.

*   Create a class through the constructor invocation pattern. ` BookList = function() {} `
*   Create another class called Book. `Book = function() {}`

*   **BookLists** should have the following properties:
	*   Number of books marked as read
	*   Number of books marked not read yet
	*   A reference to the next book to read (which should be an instance of a book object)
	*   A reference to the current book being read (book instance)
	*   A reference to the last book read (book instance)
	*   An array of all the Books
*   Each **Book** should have the following properties:
	*   Title
	*   Genre
	*   Author
	*   Read (true or false)
	*   Read date, can be blank, otherwise needs to be a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
*   Every **Booklist** should have a few methods:
	* .add(book)
		* should add a **book** to the books list.
		* if the "current book" property is empty, it should set the newly added book to the the current book, unless that book has already been read.
		* If the "next book" property is empty, it should set the newly added book to be the next book, unless that book has already been read.
	*   .finishCurrentBook()
		*   Should change the status of the **book** that is currently being read to "read"
		*   Give the current book a read date of new Date(Date.now())
		*   Point the "last **book* read" reference at the current book
		*   Point "current **book**" reference to be whatever is in the "next book" reference
		*   Change the "next **book**" reference to be the first unread book you find in the list of books (you'll have to look through the array to find one)

*   **Booklists** and **Books** might need more methods than that. Feel free to _abstract_ some functionality into multiple methods.

### !end-question

### !placeholder

// Write your Book class here
// Write your Booklist class here

### !end-placeholder

### !tests

```js
describe('Book', function () {
  var book;

  before(function(){
    book = new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false);
  })

  it("should have title, genre, author, read, and readDate properties", function() {
    expect(book.title).to.be.a("string");
    expect(book.genre).to.be.a("string");
    expect(book.author).to.be.a("string");
    expect(book.read).to.be.a("boolean");
    expect(book.readDate).to.be.undefined;
  })

  it("Should force readDate to be blank for unread books", function() {
    var unreadBook = new Book('title', 'genre', 'author', false, new Date());
    var unreadBookTwo = new Book('title', 'genre', 'author', false);
    var unreadBookThree = new Book('title', 'genre', 'author');

    expect(unreadBook.readDate).to.equal(undefined);
    expect(unreadBookTwo.readDate).to.equal(undefined);
    expect(unreadBookThree.readDate).to.equal(undefined);
  });

  it("Should create a new date for books that are read, but do not specify a readDate", function(){
    var book = new Book('title', 'genre', 'author', true);
    expect(book.readDate).to.be.instanceOf(Date);
  });
});


describe('BookList', function () {
  var list;

  before(function () {
    list = new BookList();
  })

  it("should have an array of all the Books, called 'books'", function() {
    expect(list.books).to.be.a("array");
  });

  describe("Book.add", function() {
    var list;

    before(function () {
      list = new BookList();
    })

    it("should have an 'add()' method, that takes a Book object, and updates the state of the booklist", function() {
      list.add(new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false));
      list.add(new Book("Androids Do Dream of Electric Sheep", "Sci-Fi", "Android Jones", false));
      list.add(new Book("Just For Fun", "Biographies", "Linus Torvalds", true));
      list.add(new Book("Copying and Pasting Without Reading It from Stack Overflow: A Lazy Programmer's Guide", "Nonfiction", "Lay Z. Programmer", false));
      expect(list.books.length).to.equal(4);
    });

    it("should keep track of the number of finished books added by the 'add()' method, with a 'readBooks' property", function() {
      expect(list.readBooks).to.equal(1);
    });

    it("should keep track of the number of unfinished books, with a 'unreadBooks' property", function() {
      expect(list.unreadBooks).to.equal(3);
    });

    it("should keep a reference to the next unread book in the list, called 'nextBook'", function(){
      expect(list.nextBook.title).to.equal("Androids Do Dream of Electric Sheep");
    });

    it("should keep a reference to the current book being read, called 'currentBook'", function() {
      expect(list.currentBook.title).to.equal("Harry Potter and the Source Code of Doom");
    });

    it("should keep a reference to the last book marked as read, called 'lastBook'", function() {
      expect(list.lastBook.title).to.equal("Just For Fun");
    });
  });

  describe("Book.finishCurrentBook", function() {
    var list, currentBook, lastBook, nextBook;

    before(function () {
      list = new BookList();
      list.add(new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false));
      list.add(new Book("Androids Do Dream of Electric Sheep", "Sci-Fi", "Android Jones", false));
      list.add(new Book("Just For Fun", "Biographies", "Linus Torvalds", true));
      list.add(new Book("Copying and Pasting Without Reading It from Stack Overflow: A Lazy Programmer's Guide", "Nonfiction", "Lay Z. Programmer", false));
      currentBook = list.currentBook;
      lastBook = list.lastBook;
      nextBook = list.nextBook;
    })

    it("should update the currentBook reference to indicate that it has been read, and point the lastBook property to point at the currentBook property", function() {
      list.finishCurrentBook();
      expect(list.lastBook).to.equal(currentBook);
      expect(list.lastBook.read).to.be.true;
    });

    it("should update the currentBook property to point at the nextBook property", function() {
      expect(list.currentBook).to.equal(nextBook);
      expect(list.currentBook.read).to.be.false;
    })

    it("should look through the books array and find the next book that hasn't been read, but is also not currently the currentBook. It should use that book to set the nextBook property.", function() {
      expect(list.nextBook).not.to.equal(nextBook);
      expect(list.nextBook.read).to.be.false;
    })

    it("should update the read / unread counts", function() {
      expect(list.readBooks).to.equal(2);
      expect(list.unreadBooks).to.equal(2);
    })
  })

});

```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge
