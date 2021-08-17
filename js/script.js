function clear() {
    console.clear()
}

function well(x) {
    let newResult = x.filter(e => e === 'good')
    if (newResult.length === 0) {
        return "Fail!"
    } else if (newResult.length > 0 && newResult.length < 3) {
        return 'Publish!'
    } else if (newResult.length > 2) {
        return 'I smell a series!'
    }
}

well(['bad', 'bad', 'bad'])// 'Fail!')
well(['good', 'bad', 'bad', 'bad', 'bad'])//, 'Publish!')

// || function well(x){
//     let newResult = x.filter(e => e === 'good')
//     return newResult.length === 0 ? 'Fail!' : newResult.length > 0 && newResult.length< 3 ? 'Publish!' : 'I smell a series!'
// }

// Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
let filterLucky = x => {
    let newResult = x.filter(e => String(e).split('').includes("7"))
    console.log(newResult)
}
filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])// [7,70,17]
clear()

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    let result = []
    if (a.length >= b.length) {
        for (let i = 0; i < a.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    } else {
        for (let i = 0; i <= b.length; i++) {

            if (a[i] === undefined) {
            } else {
                result.push(a[i])
            }

            if (b[i] === undefined) {
            } else {
                result.push(b[i])

            }

        }
    }
    console.log(result)
}

// mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])//, [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays([66, 88, 75], ['w', 'd', 't', 'j', 'b'])//, [66, \'w\', 88, \'d\', 75, \'t\', \'j\', \'b\']

// Write a function called "filterEvenLengthWords".
//     Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
function filterEvenLengthWords(words) {
    return words.filter(el => el.length % 2 === 0)
}

{
    // const arr = [-3, 8, 67, 32, 5, 101];
    // let num = arr.find((el, i) => el > 30 && el % 2 && i > 1);
    // console.log(num)
    const arr = [1, 2, -3, 6, -5, 0];
    let num = arr.find(el => el > 30);
    console.log(num); // undefined; нет элемента
}

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//     Examples: [1, -1, 2, -2, 3] => 3
clear()

function solve(arr) {
    let mainResult
    let resultMinus
    let resultPlus
    let find
    for (let i = 0; i < arr.length; i++) {
        find = arr[i]
        resultMinus = arr.find((n, index) => n === -find)
        resultPlus = arr.find((n, index) => n === find)
        if (resultMinus === undefined) {
            mainResult = resultPlus;
            break
        } else if (resultPlus === undefined) {
            mainResult = resultMinus;
            break
        }
        console.log(resultMinus, resultPlus)
        console.log(`-------------------------`)
    }
    console.log(mainResult)

};

// solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])// -38

// Дан массив чисел arr. Необходимо вернуть новый массив, в котором будут содержаться только повторяющиеся в исходном массиве элементы (дубликаты).
const findDublicates = (arr) => {
    const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    console.log(duplicates); // [-1, 2, 0, 2, 7, 7, 7, -1, 0]
}
findDublicates([-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4])

// Дан массив чисел arr. Вернуть новый массив, в котором будут содержаться только уникальные значения элементов (у этих элементов нет дубликатов в массиве).

{
    const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
    const nonDuplicates = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    console.log(nonDuplicates);
}

// You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.
function uniqueNumbers(numbersArray) {
    console.log(numbersArray.filter((el, i) => i === numbersArray.indexOf(el)))
}

uniqueNumbers([1, 1, 2, 2, 3, 3, 3, 10, 10])
clear()

// Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
function noRepeat(str) {
    let newStr = str.split("")
    return newStr.filter(el => newStr.indexOf(el) === newStr.lastIndexOf(el))[0]
}

noRepeat("wxyz")//"w"
function fixTheMeerkat(arr) {
    return arr.reverse()
}


// 6kyu
// Write a function that will take in any array and reverse it.
//     Sounds simple doesn't it? NOTES:
//     Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let newLetter = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = newLetter
    }
    return arr
}

{
    const arr = [1, 2];
    const arr2 = [3, 4];
    const res = arr.concat(arr2); // res = [1, 2, 3, 4],
// arr объединяем с arr2 и получаем новый массив res

    const res2 = arr.concat('a', 'b'); // res2 = [1, 2, "a", "b"],
// arr объединяем со списком значений и получаем новый массив res2

    const res3 = arr.concat('cat', ['f'], arr2); // res3 = [1, 2, "cat", "f", 3, 4],
// можно одновременно объединять и массив, и значения,
}

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
function addExtra(listOfNumbers) {
    let newItem = listOfNumbers.concat(5)
    return newItem
}

// sort
{
    const arr = ['nose', 'pen', 'apple', 'eye', 'zip'];
    arr.sort(); // не нужно передавать функцию в качестве аргумента метода,
// метод сортирует элементы, как строки
    console.log(arr); // ["apple", "eye", "nose", "pen", "zip"]
}
clear()
{
    console.log('hi')
    const arr = [1, 10, 6, 160, 2, 5];
    // arr.sort(); //[1, 10, 160, 2, 5, 6]
    // arr.sort((a,b) => a - b) [1, 2, 5, 6, 10, 160]
    arr.sort((a, b) => b - a) //[160, 10, 6, 5, 2, 1]
    console.log(arr);
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
const twoOldestAges = ages => {
    let newAges = ages.sort((a, b) => a - b)
    return [newAges[newAges.length - 2], newAges[newAges.length - 1]]
}

twoOldestAges([1, 5, 87, 45, 8, 8])// [45,87]

console.log({}.toString.call([]))

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums) {
    if ({}.toString.call(nums) !== "[object Array]") {
        return []
    } else {
        let arr = nums.sort((a, b) => a - b)
        return arr
    }
}

solution([1, 2, 10, 50, 5]); //[1,2,5,10,50]
clear()

function longest(s1, s2) {
    let newStr = (s1 + s2).split("")
    let betterArr = newStr.filter((el, i) => i === newStr.indexOf(el))
    console.log(betterArr.sort().join(""))
}

longest("aretheyhere", "yestheyarehere") //"aehrsty"

function bigToSmall(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    result = result.sort((a, b) => a - b)
    console.log(result.reverse().join(">"))
}

bigToSmall([[1, 2], [3, 4], [5, 6]]) //"6>5>4>3>2>1"

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
function solve(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
    }
    console.log(result)
};

solve([15, 11, 10, 7, 12])//[15,7,12,10,11]
clear()

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.
function findChildren(santasList, children) {
    let result = []

    if (santasList.length >= children.length) {
        console.log("santa")
        for (let i = 0; i < santasList.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    } else {
        console.log("children")
        for (let i = 0; i < children.length; i++) {
            if (santasList.includes(children[i])) {
                result.push(children[i])
            }
        }
    }
    result = result.sort()
    console.log(result)
}

findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"])// ["Jason", "Jordan"]
// ||
// function findChildren(santasList, children) {
//     let ans = [];
//     for (let i=0; i<santasList.length; ++i)
//         for (let j=0; j<children.length; ++j)
//             if (ans.indexOf(children[j])==-1 && santasList[i]==children[j])
//                 ans.push(children[j]);
//     return ans.sort();
// }

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let total = 0
    let result = []
    let newArr = [...arr].sort((a, b) => a - b)
    console.log(newArr)
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(Math.max(...newArr))
            newArr.pop()
        } else if (i % 2 !== 0) {
            result.push(Math.min(...newArr))
            newArr.shift()
        }
        if (result.length === 2) {
            total += result[0] * result[1]
            result = []
        }
    }
    console.log(total)
}

minSum([12, 6, 10, 26, 3, 24]) //342

clear()

// Правильная последовательность скобок

function isValid(s) {
    let arr = s.split("")
    let result
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
            stack.push(arr[i])
            arr.shift()
        }
    }
    for (let j = 0; j < stack.length; j++) {
        if (stack[j] === "(" && arr[arr.length - j - 1] === ")") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "[" && arr[arr.length - j - 1] === "]") {
            stack.pop()
            arr.pop()
        } else if (stack[j] === "{" && arr[arr.length - j - 1] === "}") {
            stack.pop()
            arr.pop()
        } else break;
    }
    if (stack.length === 0 && arr.length === 0) {
        result = true
    } else {
        result = false
    }
    console.log(result)
}

// bellow not working)
isValid("(())")

clear()

function isValidBetter(s) {
    let stack = []
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i]

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
        } else {
            stack.push(current)
        }
    }

    function isClosedBracket(ch) {
        return [")", "}", "]"].indexOf(ch) > -1
    }

    return (stack.length === 0)
}

console.log("()", isValidBetter("())"))
console.log("()[]{}", isValidBetter("()[]{}"))
console.log("(]", isValidBetter("(]"))
console.log("(]", isValidBetter("(]"))
console.log("{[]}", isValidBetter("{[]}"))
console.log("{[[]{}]}()()", isValidBetter("{[[]{}]}()()"))


// Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    let newArr = arr.sort((a, b) => b - a)
    let sum = 0
    for (let i = 0; i < newArr.length; i++) {
        if (!!newArr[i] && !!newArr[i + 1] || arr[i] === 0 && !!newArr[i + 1] || arr[i + 1] === 0) {
            sum += newArr[i] - newArr[i + 1]
        } else break
    }
    console.log(sum)
}

sumOfDifferences([1, 0, -1, -3, 1])// 4
clear()

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.
//     If the sum of the n largest numbers is higher, return "sum". If the product of the n smallest numbers is higher, return "product". If the 2 values are equal, return "same"
function sumOrProduct(array, n) {
    let newArr = array.sort((a, b) => b - a)
    let sum = 0
    let multiply = 1
    for (let i = 0; i < n; i++) {
        sum += newArr[i]
    }
    newArr.reverse()
    for (let j = 0; j < n; j++) {
        multiply *= newArr[j]
    }
    return sum === multiply ? "same" : sum > multiply ? "sum" : "product"
}

sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) //sum

// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. !!Your function should not mutate the input array, and this will be tested (where applicable).
// Notice that the returned list will always be of odd size, since there will always be a definitive middle element.
function mirror(data) {
    let newData = [...data]
    let result = []
    let sort = newData.sort((a, b) => a - b)
    result.push(...sort);
    sort.reverse();
    sort.shift();
    result.push(...sort)
    return (result)
}

mirror([-8, 42, 18, 0, -16]) //[-16, -8, 0, 18, 42, 18, 0, -8, -16]

// In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically,
// as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.
function strangeMath(n, k) {
    const arr = [0];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.sort().indexOf(k)
}

// join
{
    const arr = ['c', 'o', 'd', 'e'];
    console.log(arr.join()); // "c,o,d,e"
    console.log(arr.join('')); // "code"
    console.log(arr.join(' : ')); // "c : o : d : e"
    console.log(arr.join(11)); // "c11o11d11e"
    const arr2 = [undefined, 'c', 'o', 'd', 'e', null];
    console.log(arr2.join('?')); // "?c?o?d?e?", значения undefined и null стали пустыми
    {
        const arr = ['bag', 'map', 'cod', 'log', 'fa'];
        let res = arr.join('_');
        console.log(res); // "bag_map_fa"}
    }

    // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
    function smash(words) {
        return words.join(" ")
    };

    // Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
    function buildString(...template) {
        return `I like ${template.join(', ')}!`;
    }

    // Create a function that returns the CSV representation of a two-dimensional numeric array.
    function toCsvText(array) {
        return array.join('\n')
    }

    // In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a.
    // Note that the difference may be zero!
    function arithmeticSequenceElements(a, r, n) {
        let arr = []
        let newValue = 0
        for (let i = a; newValue < n; i += r) {
            newValue++
            arr.push(i)
        }
        return arr.join(", ")
    }
}
