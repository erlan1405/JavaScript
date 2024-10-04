/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))


//Take an array of numbers and return the sum
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));

//Take an array of numbers and return the average
function averageArray(numbers) {
  if (numbers.length === 0) return 0;
  return sumArray(numbers) / numbers.length;
}

console.log(averageArray([1, 2, 3, 4]));

//Take an array of strings and return the longest string
function longestString(strings) {
  return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

console.log(longestString(["short", "longer", "longest"]));

//Take an array of strings and a number, and return an array of strings longer than the given number
function stringsLongerThan(strings, length) {
  return strings.filter(str => str.length > length);
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); 

//Take a number, n, and print every number between 1 and n without using loops (recursion)
function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}

console.log(printNumbers(5));
