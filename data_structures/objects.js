// Letter Map
function letterMap(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = i;
  }
  return obj;
}

// console.log(letterMap(''));
// console.log(letterMap('up'));
// console.log(letterMap('Hello'));
// console.log(letterMap('aaa'));

// Even Odd
function evenOdd(num1, num2) {
  var obj = {};
  while (num1 <= num2) {
    if (num1 % 2 === 0) {
      obj[num1] = 'even';
    }else {
      obj[num1] = 'odd';
    }
    num1 ++;
  }
  return obj;
}

// console.log(evenOdd(0,0));
// console.log(evenOdd(0,1));
// console.log(evenOdd(11,15));

// Flip Array
function flipArray(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }
  return obj;
}

// console.log(flipArray(''));
// console.log(flipArray(['a','b','c']));
// console.log(flipArray([10, 20]));

// Arrays to Object
function arraysToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1]
  }
  return obj;
}

// console.log(arraysToObject([]));
// console.log(arraysToObject([['name', 'Sue'], ['age', '24']]));
// console.log(arraysToObject([['height', 24], ['weight', 22]]));

// Growing Keys
function growingKeys(num, str) {
  var obj = {};
  var num1 = 0;
  var str1 = str;
  while (num1 !== num) {
    obj[str] = true;
    str += str1;
    num1 ++;
  }
  return obj;
}

// console.log(growingKeys(0, 'a'));
// console.log(growingKeys(1, 'a'));
// console.log(growingKeys(2, 'b'));
// console.log(growingKeys(3, 'c'));

// Pairs
function pairs(obj) {
  var array = [];
  for(var key in obj){
    array.push(key + ' - ' + obj[key])
  }
  return array;
}

// console.log(pairs({}));
// console.log(pairs({a:'b', c:'d'}));
// console.log(pairs({hey:'there'}));

// Sum Values
function sumValues(obj) {
  var sum = 0;
  for(var key in obj){
    sum += obj[key];
  }
  return sum;
}

// console.log(sumValues({}));
// console.log(sumValues({a:1, c:5}));
// console.log(sumValues({foo:12, bar:5, baz:3}));

// Biggest Property
function biggestProperty(obj) {
  var highest = 0;
  var property = '';
  for(var key in obj){
    if (obj[key] > highest) {
      highest = obj[key];
      property = key;
    }
  }
  return property;
}

// console.log(biggestProperty({}));
// console.log(biggestProperty({a:1, c:5}));
// console.log(biggestProperty({acme: 3, foo: 12, bar:5, baz:3}));

//Contains Value
function containsValue(obj, val) {
  for(var key in obj){
    if (obj[key] === val) {
      return true;
    }
  }
  return false;
}

// console.log(containsValue({}, 2));
// console.log(containsValue({a:1, c:5}, 5));
// console.log(containsValue({acme:3, foo:12, bar:5, baz:3}, 12));
// console.log(containsValue({a:1, c:5}, 7));
// console.log(containsValue({acme:3, foo:12, bar:5, baz:3}, 45));

// Key for Value
function keyForValue(obj, value) {
  for(var key in obj){
    if (obj[key] === val) {
      return key;
    }
  }
}

// console.log(keyForValue({}, 12));
// console.log(keyForValue({a:1, c:5}, 5));
// console.log(keyForValue({foo:12, bar:5, baz:3}, 12));
