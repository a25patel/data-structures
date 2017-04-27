## Scoring Rubric

Both the Pre and Post Assessments for the WDI Application Prep Course are meant to show the following learning objectives have been met:
* Solve simple code challenges with JavaScript
* Iterate over an Array and accumulate into some data structure
* Convert between Strings and Numbers
* Access and Mutate Data Structures
* Write a function that takes 0+ Parameters


They are also meant to assess the following student attributes:
* Intellectual Honesty
  - 3: Students will have no trouble admitting to struggle, looking things up, googling for the answer, or detailing their problem solving process. Student views these as natural stepping stones on the path to understanding.
  - 2: Students will admit to struggle, but will downplay how much struggle and how much research they needed to do to answer the question. Student is mildly uncomfortable with their pace and path.
  - 1: Students will downplay any struggle, instead emphasizing their strengths and will present the solution as if it was readily apparent. Student is unable to engage with their current level of knowledge.
* Growth Mindset
  - 3: Student is eager for feedback and interested in improving their answer, and will readily ask questions about different approaches.
  - 2: Student is able to take feedback but may show concern about their "natural talent". Student may ask questions, but will defend the reason for their lack of knowledge rather than embracing it as a data point.
  - 1: Student rejects feedback, defending their approach and process as correct regardless of the outcome. Or, student accepts feedback as reason that they are unsuited for programming, feel this signals it is time to give up.
* Capacity for Self-Reflection
  - 3: Student readily articulates their problem solving process and bring up areas of personal uncertainty and struggle, and attribute their successes to proper process, and hard work
  - 2: Student articulates their problem solving process, but may attribute confusion to the phrasing of the question or something else outside of themselves. Student may also be unable to articulate "how they think they did" very precisely, but may be able to say whether or not they did well.
  - 1: Student is unable to accept the burden of Self-Reflection, instead focusing on the many factors involved in their struggle that are entirely outside of themselves.
* Tenacity in the face of Challenge
  - 3: Student naturally views every struggle as an opportunity to rise to the occasion.
  - 2: Student can be called upon to rise to the occasion, but may get bogged down or present that they need to "go study more" rather than continue to wrestle with the problem.
  - 1: Student generally cannot handle questions to which they do not already know the answer, or wrestle with unfamiliar concepts. Student may seek to find a safe place to lay blame.

#### Application Prep Pretest

The following question is presented:

> Write a function called `filterMembers` that takes two inputs:
* `filter`, an array to filter
* `exclude`, an array of elements to filter out
It should return the `filter` array, without any members from `exclude`. The elements should remain in the order they're in to start. It should return whatever is left the `filter` array regardless of the content.
Examples:
- `filterMembers([1,2,3,4,5,6],[3,6])` should return `[1,2,4,5]`
- `filterMembers(["cats", "dogs", "birds", "squirrels"],["birds", "squirrels"])` should return `["cats", "dogs"]`
- `filterMembers(["1", 1, "2", 2],[1,2])` should return `["1", "2"]`
- `filterMembers([1,2,3,4,5,6])` should return `[1,2,3,4,5,6]`

Students are also asked:
Please detail how you approached the problem.

* How did you approach this problem?
* What things did you try that didn't work?
* How did you break it down?
* How did you arrive at the final result?
* What were the stages along the way?
* What, if anything, did you look up?
* Why did you choose (or not choose) to look up what you did?

To interpret their coding challenge:

* So long as all of the tests pass, students receive full credit for the coding challenge
* Students may choose to use a loop, which demonstrates they understand the accumulator pattern
* If students use the array method .filter, that may mean they looked up the answer to the question, or that they are more versed in JS than we previously thought. Make sure to look in the student's explaination. If they didn't explain anything or don't elaborate on their use of .filter, that likely means it's from stack overflow. Students should be up-front about this, but you might ask them about it to gague their level of intellectual honesty.

In the reflection section:

* Intellectual Honesty
  - Student should admit to googling the answer, or looking at the Documentation. If student solved the problem with `.filter`, they should either admit to copying and adapting the answer, or explain where they learned `.filter` from.
* Growth Mindset
  - Student should mention where they got "stuck", or what they tried first that didn't work.
  - Student should mention what they needed to learn in order to complete the challenge (if finished)
  - If the student didn't complete the challenge, they should note what they believe they need to learn
* Capacity for Self-Reflection
  - Student should mention the next few things they need to learn, or accurately detail their problem solving process.
  - Students may be unable to articulate their problem solving process- they may have had the answer "pop" into their head, meaning the process is opaque to them. This means they're no higher than a 2.
* Tenacity in the face of Challenge
  - If student didn't attempt the challenge but put notes in the reflection section, they're a 1.
  - If the student attempted but didn't complete the challenge (some submissions, some or no tests pass), look for evidence of a "stopping point" that is related to a lack of a specific type of knowledge


#### Application Prep Posttest


The following question is presented:
> For this challenge, we are interested in finding the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.
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

Students are also asked:
Please detail how you approached the problem.

* How did you approach this problem?
* What things did you try that didn't work?
* How did you break it down?
* How did you arrive at the final result?
* What were the stages along the way?
* What, if anything, did you look up?
* Why did you choose (or not choose) to look up what you did?

To interpret their coding challenge:

* So long as all the tests pass, students receive full credit for the coding challenge

In the reflection section:

* Intellectual Honesty
  - Student should admit to googling the answer, or looking at the Documentation. If the student solved the problem with `.filter`, they should either admit to copying and adapting the answer, or explain where they learned `.filter` from, as it isn't covered in the course.
* Growth Mindset
  - Student should mention where they got "stuck", or what they tried first that didn't work.
  - Student should mention what they needed to learn in order to complete the challenge (if finished)
  - If the student didn't complete the challenge, they should note what they believe they need to learn
* Capacity for Self-Reflection
  - Student should mention the next few things they need to learn, or accurately detail their problem solving process.
  - Students may be unable to articulate their problem solving process- they may have had the answer "pop" into their head, meaning the process is opaque to them. This means they're no higher than a 2.
* Tenacity in the face of Challenge
  - If student didn't attempt the challenge but put notes in the reflection section, they're a 1.
  - If the student attempted but didn't complete the challenge (some submissions, some or no tests pass), look for evidence of a "stopping point" that is related to a lack of a specific type of knowledge
