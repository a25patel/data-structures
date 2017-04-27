# Web Development Immersive Benchmark

Thank you for your application to the Full Stack Web Development program at Galvanize!

### About the Benchmark

This technical Benchmark is an exercise in learning about programming. You do not need know programming in order to apply to Galvanize, but we are looking for a basic level of understanding of coding concepts. If you are not familiar with programming languages, you should spend some time on the tutorials below before you attempt the challenge.

This challenge is a chance for us to evaluate how you can use resources in order to work through a challenge.  We are not expecting a perfect answer. Your response will be evaluated based on the content of the answer, not necessarily on the test output.

### JavaScript Resources

Galvanize offers in-person part time classes in JavaScript on several of our campuses. Please visit [www.galvanize.com/workshops](www.galvanize.com/workshops) for more information.

[Codecademy](https://www.codecademy.com/) offers many tutorials in JavaScript. We recommend the HTML/CSS, JavaScript, and jQuery sections.

After completing this path, we recommend [Eloquent JavaScript](http://eloquentjavascript.net/), [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript), and [Learn X in Y Minutes](https://learnxinyminutes.com/docs/javascript/) for additional reference and syntax help.

You should complete this programming challenge in JavaScript. If you do not have a programming environment setup on your computer, we suggest you use [http://repl.it/languages](http://repl.it/languages) to run (and debug) your code as you complete this challenge.


### !challenge

* type: code-snippet
* language: javascript
* id: 0996b4a2-4add-4693-ade3-f5dbeccb5e8c
* title: Pre-Challenge Question

### !question

## Programming Challenge Question

For this challenge, we are interested in finding the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.
Write a single function called `highestSum` that takes one argument. That argument will be an array of credit card numbers. Assume the array can have any number of credit card numbers, and that each one is a string of digits and dashes. Your function should return the credit card number that has the largest sum of digits.

Here is a sample array of credit card numbers:
```js
['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']
```

In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which have the same sum, the function should return the last one with that sum, in this case '4252-278893-7978'.

Things to accomplish:

* Contain all variables and code needed within a function.
* Have that function take one argument which will be an array of credit card number strings.
* Determine the sum of digits for each credit card number.
* Determine which credit card number has the last largest sum of digits.
* Use a return statement to return the required card number in its’ original form.

### !end-question

### !tests

describe('Pre-Challenge: highestSum', function() {

  it("highestSum is a function", function() {
    expect(highestSum).to.be.a('function');
  })

  it("highestSum returns the credit card with the highest sum", function() {
    expect(highestSum(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'])).to.eq('4252-278893-7978');

    expect(highestSum(['4916-2600-1804-0530', '4779-259888-7979', '4252-278893-7978', '4556-4242-9283-2260'])).to.eq('4779-259888-7979');
  })


})

### !end-tests

### !placeholder

### !end-placeholder

### !end-challenge

### !challenge

* type: paragraph
* id: bebd97cc-f256-4d46-9274-2a43ab2d6a17
* title: Challenge Details

##### !question

## Problem-Solving Process

Please detail how you approached the problem. Understanding how you approach problems is really critical to your career as an engineer, and we want to know as much as we can about how you think about problem solving, so please leave as detailed an answer as possible.

* How did you approach this problem?
* What things did you try that didn't work?
* How did you break it down?
* How did you arrive at the final result?
* What were the stages along the way?
* What, if anything, did you look up?
* Why did you choose (or not choose) to look up what you did?

##### !end-question

### !end-challenge

Questions? Reach out to us at [admissions@galvanize.com](mailto:admissions@galvanize.com)
By submitting your information below, you agree to our [Terms of Use](http://www.galvanize.com/terms-of-use/) and [Privacy Policy](http://www.galvanize.com/privacy/).
