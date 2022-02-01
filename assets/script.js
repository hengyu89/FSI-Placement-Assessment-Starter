// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Heng Yu" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// set quentity element
let gbQuentity = document.querySelector('#qty-gb')
let ccQuentity = document.querySelector('#qty-cc')
let sugarQuentity = document.querySelector('#qty-sugar')
let totalQuentity = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the buttons for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    gbQuentity.innerHTML = gb
    totalQuentity.innerHTML = total
})
gbMinusBtn.addEventListener('click', function() {
    if(gb > 0) {
        gb--
        total--
        gbQuentity.innerHTML = gb
        totalQuentity.innerHTML = total
    }
})

// Event listener for clicks on the buttons for Gingerbread cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
    ccQuentity.innerHTML = cc
    totalQuentity.innerHTML = total
})
ccMinusBtn.addEventListener('click', function() {
    if(cc > 0) {
        cc--
        total--
        ccQuentity.innerHTML = cc
        totalQuentity.innerHTML = total
    }
})

// Event listener for clicks on the buttons for Gingerbread cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
    sugarQuentity.innerHTML = sugar
    totalQuentity.innerHTML = total
})
sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0) {
        sugar--
        total--
        sugarQuentity.innerHTML = sugar
        totalQuentity.innerHTML = total
    }
})


// TODO: Hook up event listeners for the rest of the buttons