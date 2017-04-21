# Working with Dates - Level 1

Working with Dates in programming is more challenging than it seems. The way time works is a fairly complex system, and representing that in numbers can raise problems. This section starts by illustrating the need for logic when handling dates.

### !challenge

* type: code-snippet
* language: javascript
* id: 0fd3570f-7a94-4840-bb11-fae2eca7f246
* title: The trouble with Gregorian Calendars

### !question

* Define a function named isLeapYear that takes one argument
  * year (number)

* If the argument is a leap year
  * Return true
* Otherwise
  * Return false

Tips:
* https://en.wikipedia.org/wiki/Leap_year#Algorithm

### !end-question

### !placeholder

### !end-placeholder

### !tests

describe('isLeapYear', function() {
  it('returns true if the number is a leap year, otherwise it does not', function() {
    expect(isLeapYear(1904)).to.eq(true);
    expect(isLeapYear(1912)).to.eq(true);
    expect(isLeapYear(1928)).to.eq(true);
    expect(isLeapYear(1936)).to.eq(true);
    expect(isLeapYear(1940)).to.eq(true);
    expect(isLeapYear(1956)).to.eq(true);
    expect(isLeapYear(1964)).to.eq(true);
    expect(isLeapYear(1972)).to.eq(true);
    expect(isLeapYear(1980)).to.eq(true);
    expect(isLeapYear(1996)).to.eq(true);
    expect(isLeapYear(2000)).to.eq(true);
  });

  it('returns false if the number is not a leap year', function() {
    expect(isLeapYear(1900)).to.eq(false);
    expect(isLeapYear(1901)).to.eq(false);
    expect(isLeapYear(2001)).to.eq(false);
  });
});

### !end-tests

### !explanation

### !end-explanation

### !end-challenge
