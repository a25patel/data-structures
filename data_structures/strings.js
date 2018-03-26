//Double Letters
function doubleLetters(str) {
  var string = '';
  for (var i = 0; i < str.length; i++) {
    var letter = str[i] + str[i];
    string += letter;
  }
  return string;
}

// console.log(doubleLetters(''));
// console.log(doubleLetters('abc'));
// console.log(doubleLetters('xyzpdq'));

//Reverse String
function reverseString(str) {
  var string = '';
  for (var i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string
}

// console.log(reverseString(''));
// console.log(reverseString('Sue'));
// console.log(reverseString('Steve'));

// Repeats
function repeats(str) {
  var str1 = str.slice(0, (str.length/2))
  var str2 = str.slice(str.length/2 , str.length)
  if (str.length % 2 !== 0) {
    return false;
  }else if (str1 === str2) {
    return true;
  }else {
    return false;
  }
}

// console.log(repeats(''));
// console.log(repeats('bahbah'));
// console.log(repeats('nananananananana'));
// console.log(repeats('bahba'));
// console.log(repeats('nananananann'));

// Every Other
function everyOther(str) {
  var string = ''
  for (var i = 0; i < str.length; i = i+2) {
    string += str[i];
  }
  return string;
}

// console.log(everyOther(''));
// console.log(everyOther('a'));
// console.log(everyOther('ab'));
// console.log(everyOther('abc'));
// console.log(everyOther('abcd'));
// console.log(everyOther('abcde'));
// console.log(everyOther('Hello there'));

//All Equal
function allEqual(str) {
  var string = '';
  for (var i = 0; i < str.length; i++) {
    if (str[0] === str[i]) {
      string += str[i]
    }else{
      return false
    }
  }
  return true;
}

// console.log(allEqual(''));
// console.log(allEqual('aaa'));
// console.log(allEqual('bbbbb'));
// console.log(allEqual('ab'));
// console.log(allEqual('abbbbab'));

//Sum Letters
function sumLetters(str) {
  var num = 0;
  for (var i = 0; i < str.length; i++) {
    num += parseInt(str[i], 10);
  }
  return num;
}

// console.log(sumLetters(''));
// console.log(sumLetters('111'));
// console.log(sumLetters('2233'));

//Count Vowels
function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count ++;
      }
    }
  }
  return count;
}

// console.log(countVowels(''));
// console.log(countVowels('aeiouy'));
// console.log(countVowels('Hello'));

// Split
function split(str) {
  var array = [];
  for (var i = 0; i < str.length; i++) {
    array.push(str[i])
  }
  return array;
}

// console.log(split(''));
// console.log(split('Hello'));
// console.log(split('hi'));

//Left Pad
function leftPad(str, length, char) {
  if (str.length >= length) {
    return str;
  }else {
    var newLength = length - str.length;
    var newChar = '';
    while (newLength !== 0 ) {
      newChar += char;
      newLength --;
    }
    return newChar + str;
  }
}

// console.log(leftPad('Hello', 0, '-'));
// console.log(leftPad('Hello', 1, '-'));
// console.log(leftPad('Hello', 2, '-'));
// console.log(leftPad('Hello', 3, '-'));
// console.log(leftPad('Hello', 4, '-'));
// console.log(leftPad('Hello', 5, '-'));
// console.log(leftPad('Hello', 6, '-'));
// console.log(leftPad('Hello', 7, '-'));
// console.log(leftPad('Hello', 8, '-'));
// console.log(leftPad('a', 4, '^'));
// console.log(leftPad('bb', 5, ' '));

// Create String
function createString(num, ltr) {
  var str = '';
  while (num > 0) {
    str += ltr;
    num --;
  }
  return str;
}

// console.log(createString(0, 'r'));
// console.log(createString(-1, 'r'));
// console.log(createString(1, 'r'));
// console.log(createString(3, 'w'));

// InterWeave
function interWeave(array1, array2) {
  var newArr = [];
  for (var i = 0; i < array1.length; i++) {
    newArr.push(array1[i]);
    newArr.push(array2[i]);
  }
  return newArr;
}

var array1 = ["a", "b", "c"];
var array2 = ["x", "y", "z"];
var array3 = [1,2,3,4];
var array4 = [5,6,7,8];

// console.log(interWeave(array1, array2));
// console.log(interWeave(array3, array4));











//Code Points (NOT WORKING!! )
function getCodePoints(str) {
  var array = [];
  if (str.length === 0) {
    return array
  }else {
    for (var i = 0; i < str.length; i++) {
      var point = str.codePointAt(i);
      array.push(point);
    }
  }
  return array;
}
// console.log('ABC'.codePointAt(1));
// console.log(getCodePoints(''));
// console.log(getCodePoints('Hello'));
// console.log(getCodePoints('hi'));





// Ceasar Shift (Not Done!)
