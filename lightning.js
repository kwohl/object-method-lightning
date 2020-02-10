const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = 
    {
    officeName: "Cat Doctor",
    streetAddress: "100 Nice Street",
    doctorName: "Dr. Jackson Galaxy",
    patientName: "Annie",
    visitDate: "January 12, 2020",
    amountBilled: 87.42,
    dueDate: "February 12, 2020"
}

//use square bracket notation to output the value of the three properties (lines 1-3) to the console. no quotes or dot notation because then we would be looking for a key within the obj with that name (as opposed to the variable name)
console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])

//use Object.values() to output all the property values to the console
console.log(Object.values(doctorBill))

//output all the key names from your doctor's office bill to the console
console.log(Object.keys(doctorBill))

//output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. wrap each one in a <span> element
const doctorOutput = document.querySelector("#doctorOutput")
const doctorKeys = Object.keys(doctorBill)

for(const key of doctorKeys){
const billHtml = `<span>${key}: ${doctorBill[key]}</span><br>`
doctorOutput.innerHTML += billHtml
}

//Lightning Exercises Part 2 - food

const favoriteDinner = {
    name: "Beef Stroganoff",
    servings: 4,
    glutenFree: false,
}

const foodOutput = document.querySelector(".food")
const foodKeys = Object.keys(favoriteDinner)

for(const key of foodKeys){
    const foodHtml = `<span>${key}: ${favoriteDinner[key]}</span><br>`
    foodOutput.innerHTML += foodHtml
}