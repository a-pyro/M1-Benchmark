/* 
JS EXERCISES
        x21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        x22) Create an object with properties such name, surname, email
        x23) Delete Email from the previously created object
        x24) Create an array with 10 strings in it
        x25) Print in the console every string in the previous array
        x26) Create an array with 100 random numbers in it
        x27) Write a function to get the MAX and the MIN from the previously created array
        x28) Create an array of arrays, in which every array has 10 random numbers
        x29) Create a function that gets 2 arrays and returns the longest one
        x30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

*/

let firstName = 'Morty'
let lastName = 'Germenji'

console.log(`${firstName} <> ${lastName}`);

const user = {
    name: 'Ardi',
    surName: 'Germenji',
    email: 'ardi.germenji@strive.com'
}
console.log(user);

delete user.email

console.log(user);

let arrayOfStrings = ['hi', 'i', 'am', 'a', 'string', 'with', 'no', 'purpose', '!', 'Peace and Love!']
console.log(arrayOfStrings);

arrayOfStrings.forEach((string) => {
    console.log(string)
})

const randomNumbersArray = []
for (let i = 0; i < 100; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 100))
}

// console.log(randomNumbersArray);

// 27) Write a function to get the MAX and the MIN from the previously created array
// % Try with bubble sort
const findMaxMin = function () {
    randomNumbersArray.sort()
    console.log(`Min: ${randomNumbersArray[0]} Max: ${randomNumbersArray[randomNumbersArray.length-1]}`);
}

findMaxMin()

// 28) Create an array of arrays, in which every array has 10 random numbers
// % try to optimize loops
const numberGenerator = () => Math.floor(Math.random() * 100);
// console.log(numberGenerator());
const randomNumberMatrix = []
const generateMatrix = function () {
    for (let i = 0; i < 10; i++) {
        randomNumberMatrix.push(new Array())
    }
    // console.log(randomNumberMatrix);

    for (let j = 0; j < randomNumberMatrix.length; j++) {
        for (let k = 0; k < 10; k++) {
            randomNumberMatrix[j].push(numberGenerator())
        }
    }
}
generateMatrix()
// console.log(randomNumberMatrix);

// 29) Create a function that gets 2 arrays and returns the longest one
const longestArray = function (array1, array2) {
    if (array2.length === array1.length) {
        return 'they have the same length'
    } else {

        return array1.length > array2.length ? array1 : array2
    }
}

// console.log(longestArray([1, 2, 3], [1, 2, 3, 4, 5]));
// console.log(longestArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7]));
// console.log(longestArray([1], [1]));

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const higherSumArray = function (arr1, arr2) {
    let sumArr1 = 0
    let sumArr2 = 0
    for (let element of arr1) {
        sumArr1 += element
    }
    for (let element of arr2) {
        sumArr2 += element
    }
    return sumArr1 > sumArr2 ? arr1 : arr2
}
// console.log(higherSumArray([10, 10, 10], [20, 20, 20]));
// console.log(higherSumArray([30, 30, 30], [20, 20, 20]));

/*
DOM 
        x31) Get element with ID "container" from the page
        x32) Get every "td" from the page
        x33) Create a cycle that prints the text inside every td of the page
        x34) Write a function to change the heading of the page
        x35) Write a function to add an extra row to the table
        x36) Write a function to add the class "test" to each row in the table
        x37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list
*/

// 31) Get element with ID "container" from the page
const container = document.getElementById('container')
// console.log(container);

// 32) Get every "td" from the page
const tableData = document.querySelectorAll('td')
console.log(tableData);

// 33) Create a cycle that prints the text inside every td of the page 

for (let i = 0; i < tableData.length; i++) {
    console.log(tableData[i].innerText);
}

// 34) Write a function to change the heading of the page
// % implement reset button & refocus on input text
const fireHeading = document.getElementById('heading-button')
fireHeading.addEventListener('click', function () {

    const newHeading = document.querySelector('#change-heading')
    const mainHeading = document.querySelector('h1')
    if (newHeading.value === '') {
        alert('Pleast insert a new heading!')
    } else {
        mainHeading.innerText = newHeading.value
        // console.log(newHeading);

        newHeading.value = ''
    }
})

// 35) Write a function to add an extra row to the table
// %implement remove row & sett new images for each new row generated
const addExtraRow = document.querySelector('#extra-row')
addExtraRow.onclick = function () {
    // get the row reference to the father Table
    const table = document.querySelector('table')
    // generating tr
    const newRow = document.createElement('tr')
    console.log(newRow);
    table.insertBefore(newRow, table.childNodes[0])

}

// 36) Write a function to add the class "test" to each row in the table
const addTestClass = document.querySelector('#test-class')
addTestClass.addEventListener('click', function () {
    const tableRows = document.querySelectorAll('tr')
    tableRows.forEach((row) => {
        row.classList.add('test')
    })
})

// 37) Write a function to add a red background to every link in the page