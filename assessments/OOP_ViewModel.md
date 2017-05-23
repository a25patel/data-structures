# Checkpoint: Problem-Solve using a common Design Pattern

This checkpoint tells us you can Problem-Solve using a common Design Pattern. It relates to the [Design Patterns Unit](https://github.com/gSchool/javascript-curriculum/blob/master/30_Object_Oriented_Programming/OOP_Patterns.md).

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
* id: feb03b5b-e42f-4f28-b5bd-98e037fe6bba
* title: Problem-Solve using a common Design Pattern

### !question

### The Book List

_An object-oriented book-list!_

This booklist program should allow you to keep track of all the books you've read. You should be able to always find out what book you last read, what book you're reading now, and what book you want to read next. You should also be able to mark your current book as "finished", which will update all of the information about your current reading accordingly.

* Create a class called `BookList`
	* The tests will create it like this: `let bookList = new BookList()`
* Create another class called `Book`
	*	The tests will create it like this: `let book = new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false);`


* **BookLists** should have the following properties:
  * `books` - An array of all the Books
  * `readBooks`- Number of books marked as read (default to 0)
  * `unreadBooks`- Number of books marked not read yet (default to 0)
  * `nextBook` - A reference to the next book to read (which should be an instance of a book object) (default to `null`)
  * `currentBook` - A reference to the current book being read (book instance) (default to `null`)
  * `lastBook` - A reference to the last book read (book instance) (default to `null`)
* Each **Book** should have the following properties:
  * `title`- a string title of the book
  * `genre`- a string genre of the book
  * `author`- a string of the author's name
  * `read`-  (`true` or `false`) indicating whether or not it's been read
  * `readDate`- initially set to `null`, set to a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) when the book is read.


* Every **Booklist** should have a few methods:
  * `.add(book)`
    * should add a `Book` to the `BookList` by putting it in the `books` array
    * if the `currentBook` property is `null`, it should set the newly added book to the the current book, unless that book has already been read
    * If the `nextBook` property is `null`, it should set the newly added book to be the next book, unless that book has already been read
    * Based on the book that is added, update the `readBooks` and `unreadBooks` properties
  * `.finishCurrentBook()`
    * Should change the status of the `Book` referenced by the `currentBook` property, set it's `read` property to `true`
    * Update the `readBooks` and `unreadBooks` properties
    * Give the `currentBook` a `Date()` of the current time
    * Point the `lastBook` reference at the `currentBook`
    * Point `currentBook` reference to the `nextBook` reference
    * Set the `nextBook` reference to be the first unread `Book` you find in the `books` property

* **Booklists** and **Books** might need more methods than that. Feel free to _abstract_ some functionality into multiple methods.

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

### !challenge

* type: short-answer
* id: fe69d1a9-fa86-4d2e-8e90-084ee475d120
* title: What is Book?

##### !question

What kind of class is `Book`?

##### !end-question

##### !answer

/([Mm]odel)/

##### !end-answer

##### !explanation

Correct! It is a Model, but not a View Model, because it holds data but cannot represent itself.

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: d8dca6cb-73bd-4650-acb6-140074bbd824
* title: What is BookList?

##### !question

What kind of class is BookList?

##### !end-question

##### !answer

/[cC]ollection/

##### !end-answer

##### !explanation

Correct! The BookList is a Collection, because it provides special group-based functionality to a group of a single type of Model.

##### !end-explanation

### !end-challenge
