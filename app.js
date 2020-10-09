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
        x38) Console log "Page loaded" when the page is correctly loaded
        x39) Write a function to add new items to a UL
        x40) Write a function to empty a list
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

const addLinkBg = document.querySelector('#link-bg')
addLinkBg.addEventListener('click', function () {
    console.log(event);
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
        link.classList.toggle('link-bg-red')
    })

})

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
    console.log(`Page Loaded`);
}

// 39) Write a function to add new items to a UL
const addLi = document.querySelector('#new-li')

addLi.addEventListener('click', function () {
    const ul = document.querySelector('ul')
    const liContent = document.querySelector('#ex-39 input')
    if (liContent.value !== '') {
        const newLi = document.createElement('li')
        newLi.innerText = liContent.value
        ul.appendChild(newLi)
        liContent.value = ''
    } else {
        alert('Please insert a new list item')
    }
    // console.log('ifire');
    // console.log(liContent);


})




// 40) Write a function to empty a list

const fireList = document.querySelector('#empty-list')
fireList.addEventListener('click', function () {
    const ul = document.querySelectorAll('ul > li')
    console.log(typeof ul, ul);
    console.log(ul.length);

    for (let i = 0; i < ul.length; i++) {
        ul[i].remove()
    }

})


// EXTRA 
// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// ! check why if doesn't work
const linksExtra = document.querySelectorAll('a')

linksExtra.forEach((link) => {
    link.addEventListener('mouseover', function () {
        const textToAlert = link.href
        if (link.href === '#') {
            alert(`DON'T TOUCH ME! MIAO`)
        } else {
            alert(textToAlert)

        }
    })
})

// 42) Add a button to hide every image on the page
window.addEventListener('DOMContentLoaded', function () {
    // alert('DOM IS LOADED')
    const toggleImg = document.createElement('button')
    toggleImg.id = '#toggle-img'
    toggleImg.innerText = 'Hide/Show My Little Friend'
    toggleImg.style.marginLeft = '.4rem'
    const father = document.querySelector('#ex-37')
    father.appendChild(toggleImg)

    toggleImg.addEventListener('click', function () {
        // get reference to img
        const images = document.querySelectorAll('img')
        // loop to hide
        for (let i = 0; i < images.length; i++) {
            images[i].classList.toggle('hide')
        }
    })

    // 43) Add a button to hide and show the table from the page

    const toggleTable = document.createElement('button')
    toggleTable.innerText = 'Show/Hide Table'
    toggleTable.style.marginLeft = '.4rem'
    father.appendChild(toggleTable)
    toggleTable.addEventListener('click', () => {
        const table = document.querySelector('table')
        table.classList.toggle('hide')
    })


    // 44) Write a function to sum every number inside the TD (if the content is numeric)

    const sumTd = document.createElement('button')
    sumTd.innerText = 'Sum Table Datas'
    sumTd.style.marginLeft = '.4rem'
    father.appendChild(sumTd)
    sumTd.addEventListener('click', () => {
        // array con tr => 4
        const tableRows = document.querySelector('table').rows
        console.log(tableRows);
        // ogni row ha un array con gli elementi td (cells)
        const arrayTDMatrix = []
        for (let i = 0; i < tableRows.length; i++) {
            arrayTDMatrix.push(tableRows[i].cells)
        }
        console.log(arrayTDMatrix);
        // tr.cells => array coi td
        // ora dovrei avere un array con dentro 4 array i quali dentro hanno 5 td
        // tiriamo fuori i td 
        const arrayTD = []
        for (let a = 0; a < arrayTDMatrix.length; a++) {
            for (let b = 0; b < arrayTDMatrix[a].length; b++) {
                arrayTD.push(arrayTDMatrix[a][b])
            }
        }
        console.log(arrayTD); // BECCATO!!!!
        // ogni td ha la proprietà .innertext che mi serve

        const arrayDataValue = []
        for (let element of arrayTD) {
            arrayDataValue.push(element.innerText)
        }
        console.log(arrayDataValue);

        // ora ho array con tutti i value che sono stringhe quindi parse int

        for (let element of arrayDataValue) {
            if (isNaN(parseInt(element))) {
                alert('Please Insert Numbers to do the sum!')
                break;
            } else {
                let sum = 0;
                for (let number of arrayDataValue) {
                    sum += parseInt(number)
                }
                alert(`The sum is: ${sum}`)
            }
        }






        // const arrayOfTdata = [];
        // for (let i = 0; i < tableRows.length; i++) {

        //     arrayOfTdata.push(tableRows[i].cells.innerText)
        // }
        // console.log(arrayOfTdata);
    })
})






// 45) Delete the last letter from the title each time the user clicks on it
const title = document.querySelector('title');
let clickCount = 0
title.addEventListener('click', () => {
    cl

})
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it

// 49) Write a function to add a table with 4 rows and 3 columns programmatically

const father = document.querySelector('section')
const addTable = document.createElement('button')
addTable.innerText = 'Add new table'
addTable.style.marginLeft = '.4rem'
father.appendChild(addTable)
const aggiungiTable = () => {
    const newTable = document.createElement('table')
    newTable.innerHTML = '<tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr>'
    father.appendChild(newTable)
    return newTable
}
addTable.addEventListener('click', aggiungiTable)



// 50) Write a function to remove the table from the page

const removeTable = document.createElement('button')
const remove = document.createElement('button')
removeTable.innerText = 'Remove table'
removeTable.style.marginLeft = '.4rem'
father.appendChild(removeTable)

removeTable.addEventListener('click', function () {
    father.removeChild(aggiungiTable())
})