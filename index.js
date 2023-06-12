// javascript
let numEl = document.getElementById("num-el")
let lengthNum = document.getElementById("length-num")
let volumeNum = document.getElementById("volume-num")
let massNum = document.getElementById("mass-num")

function convert() {
  
  // Meters to Feet
  let metersToFeet = numEl.value * 3.28084
  let feetToMeters = numEl.value / 3.28084
  let metersToFeetValue = numEl.value + " meters = " + metersToFeet.toFixed(3) + " feet"
  let feetToMetersValue = numEl.value + " feet = " +  feetToMeters.toFixed(3) + " meters"
  lengthNum.textContent = metersToFeetValue + " | " + feetToMetersValue 
  
  // Liters to Gallons
  let litersToGallons = numEl.value * 0.26417
  let gallonsToLiters = numEl.value / 0.26417
  let litersToGallonsValue = numEl.value + " liters = " + litersToGallons.toFixed(3) + " gallons"
  let gallonsToLitersValue = numEl.value + " gallons = " + gallonsToLiters.toFixed(3) + " liters"
  volumeNum.textContent = litersToGallonsValue + " | " + gallonsToLitersValue
  
  // Kilograms to Pounds
  let kilogramsToPounds = numEl.value * 2.20462
  let poundsToKilograms = numEl.value / 2.20462
  let kilogramsToPoundsValue = numEl.value + " kilograms = " + kilogramsToPounds.toFixed(3) + " pounds"
  let poundsToKilogramsValue = numEl.value + " pounds = " + poundsToKilograms.toFixed(3) + " kilograms"
  massNum.textContent = kilogramsToPoundsValue + " | " + poundsToKilogramsValue
  }
  
  
  
//   caculator
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent += num1 + num2 
// }
// this will keep adding everything
// for keep num1 and num2 be number, must caculate them first, then add string sum

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

