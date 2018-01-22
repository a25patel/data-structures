# Strings as Data Structures - Level 2

In these exercises, we'll start to explore Code Points and other intracacies of Strings as Data Structures.

### !question
## Get Code Pointsg 

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

- If you pass `"Hello"` it should return `[ 72, 101, 108, 108, 111 ]`
### !end-question

### !placeholder
### !end-placeholder

### !tests
```js
describe('getCodePoints', function() {

  it("returns an empty array when given an empty string", function() {
    expect(getCodePoints(""), "Default value is incorrect").to.deep.eq([])
  })

  it("returns an array containing the codePoints of each letter in the string", function() {
    expect(getCodePoints("Hello")).to.deep.eq([ 72, 101, 108, 108, 111 ])
    expect(getCodePoints("hi")).to.deep.eq([ 104, 105 ])
  })

})
```

### !question

The purpose of this challenge is to be able to encode and decode a string using the Caesar cipher. You'll need to create **4 functions**: `encodeMessage`, `decodeMessage`, `caesarShiftInt`, `caesarShiftChar`
- https://en.wikipedia.org/wiki/Caesar_cipher

Each string character has a numeric representation called a Unicode value. For example, the character "a" has a Unicode value of 97 and the character "b" has an Unicode value of 98.
- http://www.ssec.wisc.edu/~tomw/java/unicode.html#x0000

JavaScript has a pair of methods to convert characters to and from Unicode values.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
The Caesar cipher works like this.
- Convert the character "a" to the Unicode value 97.
- Add 13 to that integer, resulting in 110.
- Convert the new Unicode value to a character, resulting in "n".

If adding 13 to a Unicode value results in a number greater than 122 (i.e. "z"), wrap back around to the start of the alphabet. It'll take a few steps to solve this cipher. Have fun!

### !end-question

### !placeholder

function encodeMessage(input) {

}

function decodeMessage(input) {

}

function caesarShiftInt(input) {

}

function caesarShiftChar(input) {

}

### !end-placeholder

### !tests

describe('caesarShiftInt', function() {
    it('throws an error if the number is less than 97', function() {
      expect(caesarShiftInt.bind(null, 50)).to.throw(/Error: integer too low/);
      expect(caesarShiftInt.bind(null, 90)).to.throw(/Error: integer too low/);
    });

    it('throws an error if the number is greater than 122', function() {
      expect(caesarShiftInt.bind(null, 123)).to.throw(/Error: integer too high/);
      expect(caesarShiftInt.bind(null, 149)).to.throw(/Error: integer too high/);
    });

    it('shifts the number 13 places, wrapping it back to 97 once it hits 122', function() {
      expect(caesarShiftInt(97)).to.eq(110);
      expect(caesarShiftInt(98)).to.eq(111);
      expect(caesarShiftInt(99)).to.eq(112);
      expect(caesarShiftInt(100)).to.eq(113);
      expect(caesarShiftInt(101)).to.eq(114);
      expect(caesarShiftInt(102)).to.eq(115);
      expect(caesarShiftInt(103)).to.eq(116);
      expect(caesarShiftInt(104)).to.eq(117);
      expect(caesarShiftInt(105)).to.eq(118);
      expect(caesarShiftInt(106)).to.eq(119);
      expect(caesarShiftInt(107)).to.eq(120);
      expect(caesarShiftInt(108)).to.eq(121);
      expect(caesarShiftInt(109)).to.eq(122);
      expect(caesarShiftInt(110)).to.eq(97);
      expect(caesarShiftInt(111)).to.eq(98);
      expect(caesarShiftInt(112)).to.eq(99);
      expect(caesarShiftInt(113)).to.eq(100);
      expect(caesarShiftInt(114)).to.eq(101);
      expect(caesarShiftInt(115)).to.eq(102);
      expect(caesarShiftInt(116)).to.eq(103);
      expect(caesarShiftInt(117)).to.eq(104);
      expect(caesarShiftInt(118)).to.eq(105);
      expect(caesarShiftInt(119)).to.eq(106);
      expect(caesarShiftInt(120)).to.eq(107);
      expect(caesarShiftInt(121)).to.eq(108);
      expect(caesarShiftInt(122)).to.eq(109);
    });
  });

  describe('caesarShiftChar', function() {
    it("doesn't shift a punctuation character", function() {
      expect(caesarShiftChar('.')).to.eq('.');
      expect(caesarShiftChar('`')).to.eq('`');
      expect(caesarShiftChar('{')).to.eq('{');
      expect(caesarShiftChar('|')).to.eq('|');
    });

    it('shift a single lowercase character', function() {
      expect(caesarShiftChar('a')).to.eq('n');
      expect(caesarShiftChar('b')).to.eq('o');
      expect(caesarShiftChar('c')).to.eq('p');
      expect(caesarShiftChar('d')).to.eq('q');
      expect(caesarShiftChar('e')).to.eq('r');
      expect(caesarShiftChar('f')).to.eq('s');
      expect(caesarShiftChar('g')).to.eq('t');
      expect(caesarShiftChar('h')).to.eq('u');
      expect(caesarShiftChar('i')).to.eq('v');
      expect(caesarShiftChar('j')).to.eq('w');
      expect(caesarShiftChar('k')).to.eq('x');
      expect(caesarShiftChar('l')).to.eq('y');
      expect(caesarShiftChar('m')).to.eq('z');
      expect(caesarShiftChar('n')).to.eq('a');
      expect(caesarShiftChar('o')).to.eq('b');
      expect(caesarShiftChar('p')).to.eq('c');
      expect(caesarShiftChar('q')).to.eq('d');
      expect(caesarShiftChar('r')).to.eq('e');
      expect(caesarShiftChar('s')).to.eq('f');
      expect(caesarShiftChar('t')).to.eq('g');
      expect(caesarShiftChar('u')).to.eq('h');
      expect(caesarShiftChar('v')).to.eq('i');
      expect(caesarShiftChar('w')).to.eq('j');
      expect(caesarShiftChar('x')).to.eq('k');
      expect(caesarShiftChar('y')).to.eq('l');
      expect(caesarShiftChar('z')).to.eq('m');
    });

    it('shifts a single uppercase character', function() {
      expect(caesarShiftChar('A')).to.eq('n');
      expect(caesarShiftChar('B')).to.eq('o');
      expect(caesarShiftChar('C')).to.eq('p');
      expect(caesarShiftChar('D')).to.eq('q');
      expect(caesarShiftChar('E')).to.eq('r');
      expect(caesarShiftChar('F')).to.eq('s');
      expect(caesarShiftChar('G')).to.eq('t');
      expect(caesarShiftChar('H')).to.eq('u');
      expect(caesarShiftChar('I')).to.eq('v');
      expect(caesarShiftChar('J')).to.eq('w');
      expect(caesarShiftChar('K')).to.eq('x');
      expect(caesarShiftChar('L')).to.eq('y');
      expect(caesarShiftChar('M')).to.eq('z');
      expect(caesarShiftChar('N')).to.eq('a');
      expect(caesarShiftChar('O')).to.eq('b');
      expect(caesarShiftChar('P')).to.eq('c');
      expect(caesarShiftChar('Q')).to.eq('d');
      expect(caesarShiftChar('R')).to.eq('e');
      expect(caesarShiftChar('S')).to.eq('f');
      expect(caesarShiftChar('T')).to.eq('g');
      expect(caesarShiftChar('U')).to.eq('h');
      expect(caesarShiftChar('V')).to.eq('i');
      expect(caesarShiftChar('W')).to.eq('j');
      expect(caesarShiftChar('X')).to.eq('k');
      expect(caesarShiftChar('Y')).to.eq('l');
      expect(caesarShiftChar('Z')).to.eq('m');
    });
  });

  describe('encodeMessage', function() {
    it('encodes a message', function() {
      expect(encodeMessage('Wow this is cool')).to.eq('jbj guvf vf pbby');
      expect(encodeMessage('SUPER SECRET')).to.eq('fhcre frperg');
      expect(encodeMessage('Hello, there!')).to.eq('uryyb, gurer!');
    });
  });

  describe('decodeMessage', function() {
    it('decodes a message', function() {
      expect(decodeMessage('jbj guvf vf pbby')).to.eq('wow this is cool');
      expect(decodeMessage('fhcre frperg')).to.eq('super secret');
      expect(decodeMessage('uryyb, gurer!')).to.eq('hello, there!');
    });
  });
