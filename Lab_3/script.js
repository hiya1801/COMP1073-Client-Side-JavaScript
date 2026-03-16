/*
Hiyaben Haresbhai Jayswal
This constructor allows programmers to create
multiple toy car objects with many properties.

Each property describes a feature of the toy car
similar to product specifications on ModelToyCars.com
*/

function ToyCar(
    brand,
    model,
    color,
    scale,
    price,
    material,
    year,
    doors,
    wheels,
    engineType,
    weight,
    length,
    width,
    height,
    limitedEdition
){
    //assign values to object properties
    this.brand = brand
    this.model = model
    this.color = color
    this.scale = scale
    this.price = price
    this.material = material
    this.year = year
    this.doors = doors
    this.wheels = wheels
    this.engineType = engineType
    this.weight = weight
    this.length = length
    this.width = width
    this.height = height
    this.limitedEdition = limitedEdition

}

//create multiple toy car object instances
let car1 = new ToyCar(
    "Ferrari",
    "488 GTB",
    "Red",
    "1:18",
    79.99,
    "Diecast Metal",
    2020,
    2,
    4,
    "V8",
    "1.2kg",
    "25cm",
    "10cm",
    "7cm",
    "Yes"
)
let car2 = new ToyCar(
    "Lamborghini",
    "Aventador",
    "Yellow",
    "1:18",
    89.99,
    "Diecast Metal",
    2019,
    2,
    4,
    "V12",
    "1.3kg",
    "26cm",
    "11cm",
    "7cm",
    "No"
)
let car3 = new ToyCar(
    "Ford",
    "Mustang GT",
    "Blue",
    "1:24",
    49.99,
    "Diecast Metal",
    2021,
    2,
    4,
    "V8",
    "1kg",
    "22cm",
    "9cm",
    "6cm",
    "No"
)
//stores all toy car objects inside an array
let cars = [car1, car2, car3]
//function to display toy cars on the webpage
function displayCars(){

    let container = document.getElementById("carContainer")

    container.innerHTML = ""

    cars.forEach(function(car){
        container.innerHTML += `
        <div class="car-card">
        <h3>${car.brand} ${car.model}</h3>
        <p><b>Color:</b> ${car.color}</p>
        <p><b>Scale:</b> ${car.scale}</p>
        <p><b>Price:</b> $${car.price}</p>
        <p><b>Material:</b> ${car.material}</p>
        <p><b>Year:</b> ${car.year}</p>
        <p><b>Doors:</b> ${car.doors}</p>
        <p><b>Wheels:</b> ${car.wheels}</p>
        <p><b>Engine:</b> ${car.engineType}</p>
        <p><b>Weight:</b> ${car.weight}</p>
        <p><b>Dimensions:</b> ${car.length} x ${car.width} x ${car.height}</p>
        <p><b>Limited Edition:</b> ${car.limitedEdition}</p>
        </div>
        `
    })

}
/* allows user to change the color
of a selected toy car object */
function changeColor(){

    let carIndex = document.getElementById("carSelect").value

    let newColor = document.getElementById("colorInput").value

    cars[carIndex].color = newColor

    displayCars()

}
//run displayCars function when page loads
displayCars()