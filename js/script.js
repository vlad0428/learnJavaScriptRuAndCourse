function clear() {
    console.clear()
}


// Выведите строку по одному слову в столбик, выравние по правому краю
function wordsInColumn(text) {
    let maxLengthWord = Math.max(...text.split(' ').map(el => el.length))
    // let str = text.split(' ').map(el => `${el}\n`).join('')
    let arr = text.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let tempSpace = maxLengthWord - arr[i].length
        let newWord = arr[i].split('')

        if (i === 0 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i !== arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (i === arr.length - 1 && newWord.length !== maxLengthWord) {
            for (let j = 0; j < tempSpace; j++) {
                newWord.unshift(' ')
            }
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
        //For biggest word
        else if (newWord.length === maxLengthWord && i === 0) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (newWord.length === maxLengthWord && i !== arr.length - 1) {
            console.log(`${newWord.join('')}\n`.split(''))
            result.push(`${newWord.join('')}\n`)
        } else if (newWord.length === maxLengthWord && i === arr.length - 1) {
            console.log(`${newWord.join('')}`.split(''))
            result.push(`${newWord.join('')}`)
        }
    }
    console.log(result)
    console.log(result.join(''))
}

// wordsInColumn('I will get everything I want')
// wordsInColumn('Enjoy every moment')
// wordsInColumn('Live without regrets')
wordsInColumn('Never look back')

clear()


function isPalindrome(str) {
    let str1 = str.toLowerCase().split(' ').join('')
    let str2 = str.toLowerCase().split('').reverse().join('').split(' ').join('')
    return str1 === str2
}

isPalindrome('Enjoy every moment') //false
isPalindrome('Was it a car or a cat I saw') //true

{
    let str = 'K30os2t53ya'
    str = str.split(/[0-9]/).join('')
    //Kostya
    let user = {
        name: "John",
        age: 30,
        "likes programming": true,
    };
    //console.log(user.likes programming);  // появится ошибка
    console.log(user['likes programming']);  // true
    delete user.age
    let user2 = new Object(); // "конструктор объекта"
    let user3 = {};           // "литерал объекта"
}

function wrap(value) {
    const obj = {'value': value}
    return obj
}

//Fix errors
let rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        },
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}

function bloodAlcoholContent(drinks, weight, sex, time) {
    let bac = ((drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4)
    return +bac;
}

bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1)// 0.0837)
bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1)// 0.1758);
bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3)// 0.0601);
bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2)// 0.2414);

