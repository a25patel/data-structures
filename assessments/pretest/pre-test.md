# Benchmark

This challenge will help you understand if you're ready to take the final technical benchmark!

### !challenge

* type: code-snippet
* language: javascript
* id: 27da80dc-777c-450a-a244-b7a4b8ecc4d7
* title: Application Prep Benchmark

### !question

Write a function called `filterMembers` that takes two inputs:
* `filter`, an array to filter
* `exclude`, an array of elements to filter out

It should return the `filter` array, without any members from `exclude`. The elements should remain in the order they're in to start. It should return whatever is left the `filter` array regardless of the content.

Examples:
- `filterMembers([1,2,3,4,5,6],[3,6])` should return `[1,2,4,5]`
- `filterMembers(["cats", "dogs", "birds", "squirrels"],["birds", "squirrels"])` should return `["cats", "dogs"]`
- `filterMembers(["1", 1, "2", 2],[1,2])` should return `["1", "2"]`
- `filterMembers([1,2,3,4,5,6])` should return `[1,2,3,4,5,6]`

## 😱 Help!  I didn't even know where to get started!

That's OK!  We got you 😀

Your best next step is to go to [Unit 2](https://github.com/gSchool/javascript-curriculum/blob/precourse/10_Syntax/README.md) to learn JavaScript!

### !end-question

### !placeholder

// Your code here

### !end-placeholder

### !tests


describe('filterMembers', function() {

    it("returns an array with members filtered out", function() {
      expect(filterMembers([1,2,3,4,5,6],[3,6])).to.include.members([1,2,4,5])
      expect(filterMembers([1,2,3,4,5,6],[3,6])).to.not.include.members([3,6])
      expect(filterMembers(["cats", "dogs", "birds", "squirrels"],["birds", "squirrels"])).to.include.members(["cats", "dogs"])
      expect(filterMembers(["cats", "dogs", "birds", "squirrels"],["birds", "squirrels"])).to.not.include.members(["birds", "squirrels"])
    })

    it("Compares type properly", function() {
      expect(filterMembers(["1", 1, "2", 2],[1,2])).to.include.members(["1", "2"])
      expect(filterMembers(["1", 1, "2", 2],[1,2])).to.not.include.members([1,2])
    })

    it("returns the first array when given an empty array or undefined to filter out", function() {
      expect(filterMembers([1,2,3,4,5,6])).to.include.members([1,2,3,4,5,6])
      expect(filterMembers([1,2,3,4,5,6],[])).to.include.members([1,2,3,4,5,6])
    })

})

### !end-tests

### !end-challenge

### !challenge

* type: paragraph
* id: 5510141f-4f6d-400a-bd0f-5a56723c30f5
* title: Benchmark Explanation

##### !question

Please detail how you approached the problem.

* How did you approach this problem?
* What things did you try that didn't work?
* How did you break it down?
* How did you arrive at the final result?
* What were the stages along the way?
* What, if anything, did you look up?
* Why did you choose (or not choose) to look up what you did?


##### !end-question

### !end-challenge

# How did you do?



## 🤔 Phew!  That was rough, but I did it

Maybe brush up on your programming fundamentals.

Go to [Unit 4 - Intro to Programming](https://github.com/gSchool/wdi-application-prep/blob/master/units/programming.md)

## 😴 Psshhhhh.... piece of cake!

Awesome!  You are probably ready to Enroll!

Go ahead and take the [final technical assessment](https://github.com/gSchool/javascript-drills/blob/master/assessments/pretest/post-test.md)!
