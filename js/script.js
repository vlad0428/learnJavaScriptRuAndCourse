function clear() {
    console.clear()
}

const ford = Object.create({
    calculateDistancePerYear: function () {
        console.log("Calculate")
    }
}, {
    name: {
        value: "Ford",
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: "Focus",
        enumerable: true,
        writable: false,
        configurable: false
    },

    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function () {
            console.log("Получаем возраст")
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log("Устанавливаем значение")
        }
    }
}) //Object самый глобальный класс в JS
console.log(ford)
clear()

// Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
    let z = [];
    for (let i = x; i <= 20; i += x) {
        if (i % n !== 0) {
            z.push(i)
        } else {
            z.push(i);
            break
        }
    }
    console.log(z)
}

countBy(2, 5)//[2,4,6,8,10]

function generateIntegers(n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        result.push(i)
    }
    return result
}

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
clear()

function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i < 10000; i += integer) {
        if (limit >= i) {
            arr.push(i)
        } else {
            break
        }
    }
    console.log(arr)
}

findMultiples(5, 25)// [5, 10, 15, 20, 25]
// Build a function that can get all the integers between two given numbers.
function range(startNum, endNum) {
    let arr = []
    for (let i = startNum + 1; i < endNum; i++) {
        arr.push(i)
    }
    return arr
};

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.
clear()

function solve(a, b) {
    let result = []
    for (let i = 0; i < b.length; i++) {
        let counterPush = 0
        for (let j = 0; j <= a.length; j++) {
            if (a[j] === b[i]) {
                counterPush++
            }
        }
        result.push(counterPush)
    }
    console.log(result)
}

solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])// [2, 1, 0])
clear()
{
    // Напишите функцию deleteFromEnd, которая принимает массив arr в качестве аргумента, удаляет последний элемент массива и возвращает полученный массив.
    function deleteFromEnd(arr) {
        arr.pop()
        return arr
    }

    // Напишите функцию deleteFromEnd, которая принимает массив arr в качестве аргумента, удаляет последний элемент массива и возвращает полученный массив и удаленный элемент в виде массива [newArray, element].
    function deleteFromEnd(arr) {
        let elem = arr.pop()
        return [arr, elem]
    }

    // In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.
    function doubles(s) {
        // let str = s.split('')
        // console.log(str)
        // for (let i = str.length; i >; i--){
        //     console.log(i)
        // }
        // str = str.join('')
        // console.log(str)
    }

    doubles('rrrmooomqqqqj')//rmomj

    // Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
    // Напишите функцию с именем arrayOfDigits, которая принимает в качестве аргумента число n и возвращает массив его цифр.
    // Запрещено использование методов split(), reverse(). Можно использовать методы unshift() и Math.trunc(). В решении используйте цикл do while.
    function arrayOfDigits(n) {
        let newArr = []
        let i = 0
        do {
            newArr.push(+String(n)[i])
            i++
        } while (newArr.length !== String(n).length);
        return newArr
    }

    arrayOfDigits(123456) // [1, 2, 3, 4, 5, 6]
    // Напишите функцию addValue, которая принимает массив arr и величину value в качестве аргументов, добавляет величину value в конец массива, если value является числом, или в начало массива, если value является строкой, затем возвращает полученный массив.
    function addValue(arr, value) {
        let result = arr
        if ({}.toString.call(value) === "[object Number]") {
            result.push(value)
        } else {
            result.unshift(value)
        }
        console.log(result)
    }

    addValue([1, 2, 3], 10) // [1, 2, 3, 10]
    addValue([1], "b") //["b", 1]
    clear()

    function arrayOfDigits1(array) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
            newArr.unshift(array[i])
        }
        console.log(newArr)
    }

    arrayOfDigits1([1, 2, 3])

    // Метод shift() удаляет элемент c индексом 0, сдвигает значения по последовательным индексам вниз, а затем возвращает значение удаленного элемента. Если массив был пустой, т.е. его длина была равна 0, вернётся значение undefined.
    function deleteFirstElement(arr) {
        arr.shift()
        return arr
    }

    //Напишите функцию deleteNElements, которая принимает массив arr и целое число n в качестве аргументов, удаляет первые n элементов массива и возвращает полученный массив.
    function deleteNElements(arr, n) {
        for (let i = 0; i < n; i++) {
            arr.shift()
        }
        return arr
    }

    // Дан массив, в начале которого находится некоторое количество нечисловых элементов, после которых могут находиться числа.
    // Напишите функцию deleteNotNumbers, которая принимает смешанный массив arr в качестве аргумента, удаляет все нечисловые элементы массива, находящиеся до первого числа, и возвращает полученный массив.
    function deleteNotNumbers(arr) {
        clear()
        let newArr = [...arr]
        for (let i = 0; i < newArr.length; i++) {
            if ({}.toString.call(newArr[i]) !== "[object Number]") {
                arr.shift()
            } else {
                break;
            }
        }
        console.log(arr)
    }

    deleteNotNumbers(['y', 'p', 's', 'd', 't']) //  5, -8, -4, 'z', 'e', 'j'
}
{
    // Метод includes() проверяет, содержит ли массив определённый элемент.
    // const arr = ['a', 'b', 'c', 'da', 'e', 1];
    // console.log(arr.includes('a')); // true, from здесь по умолчанию равен 0
    // console.log(arr.includes('a', 1)); // false, элемент "a" находится на 0-м индексе
    // console.log(arr.includes('1')); // false
// так как в массиве нет строки со значением "1", есть число с таким значением
    // console.log(arr.includes('d')); // false, нельзя получить часть элемента массива
    // console.log(arr.includes('c', -7)); // true
// длина массива равна 6 => индекс для начала поиска будет равен 6 + (-7) = -1
// поиск пойдет с 0-ого индекса массива
//     console.log(arr.includes('c', -4)); // true
// индекс для начала поиска будет равен 6 + (-4) = 2
// поиск пойдет начиная со 2-ого индекса массива
//     Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
    function include(arr, item) {
        return arr.includes(item)
    }

    function includeZero(arr) {
        return arr.includes(0)
    }

    // Напишите функцию includeGreaterThanMin, которая принимает непустой массив arr в качестве аргумента, и возвращает true, если массив содержит элемент, который на единицу больше минимального элемента, и false - в противном случае.
    function includeGreaterThanMin(arr) {
        let min = Math.min(...arr)
        return arr.includes(min + 1)
    }

    // Напишите функцию includesFirstLetter, которая принимает массив букв arr и слово word в качестве аргументов, и возвращает true, если массив содержит первую букву данного слова, и false - в противном случае.
    function includesFirstLetter(arr, word) {
        let firstLetter = word[0]
        console.log(arr.includes(firstLetter))
    }

    includesFirstLetter(['a', 'b', 'c'], 'banana') //true
    clear()

    // Напишите функцию includesOtherMax, которая принимает два числовых массива arr1 и arr2 в качестве аргументов, и возвращает true, если массив arr1 содержит максимальный элемент массива arr2, и false - в противном случае.
    function includesOtherMax(arr1, arr2) {
        let max2 = Math.max(...arr2)
        return arr1.includes(max2)
    }

    includesOtherMax([2, 7, 3, 6, 1, 4], [6, 2]) // true

    // Метод массива indexOf() осуществляет поиск первого индекса искомого элемента в массиве (поиск идёт через строгое сравнение ===).
    // Возвращает первый индекс найденного элемента или -1, если элемент не найден.
    // const arr = [0, 'a', 'a', 2, 6];
    // console.log(arr.indexOf('a', 0));  // 1, возвращен индекс первого найденного элемента "a"
    // console.log(arr.indexOf(2, 2));   // 3, поиск начинается с элемента под индексом 2
    // console.log(arr.indexOf('2', 1)); // -1, поиск идет через строгое равенство
    // console.log(arr.indexOf('a'));   // 1

    // Напишите функцию three, которая всегда возвращает число 3. Совсем просто? Да, если не учитывать условия, что в функции вы не должны использовать:
    // цифры 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;
    // знаки операций +, -, *, /, %
    // свойство length
    function three() {
        let arr = ["a", "b", "c", "f", "g"]
        return arr.indexOf("f")
    }

    clear()

    // Напишите функцию indexOfMin, которая принимает непустой массив arr в качестве аргумента, и возвращает индекс минимального элемента массива. Если массив содержит несколько минимальных элементов, возвратить индекс первого такого элемента.
    function indexOfMin(arr) {
        let min = Math.min(...arr)
        return arr.indexOf(min)
    }

    indexOfMin([10, 3, 4, 3, 5]) //1

    // Напишите функцию indexMaxMin, которая принимает непустой массив arr в качестве аргумента, и возвращает строку "max",
    // если индекс первого максимального элемента массива меньше индекса первого минимального элемента массива, и строку "min" - в противном случае.
    // Если в массиве все элементы равны, то возвратить undefined. function indexMaxMin(arr){
    function indexMaxMin(arr) {
        let result = undefined
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        if (arr.indexOf(min) > arr.indexOf(max)) {
            result = "max"
        } else if (arr.indexOf(min) < arr.indexOf(max)) {
            result = "min"
        }
        return result
    }

    indexMaxMin([2, 20, 20, 2]) //min

    // Напишите функцию indexOfValue, которая принимает непустой массив arr и величину value в качестве аргументов, и возвращает индекс элемента массива со значением value, или undefined - если такой элемент отсутствует.
    function indexOfValue(arr, value) {
        return arr.indexOf(value) === -1 ? undefined : arr.indexOf(value)
    }
}







