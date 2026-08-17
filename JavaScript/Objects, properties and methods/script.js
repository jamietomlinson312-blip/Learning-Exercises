const cars = { // Creating car object
    brand: "Ford",
    price: 1000,
    colour: "blue",
    seats:5,
    extras: {
        radio: true,
        spareWheel: true,
        satNav: false,
    },
    changeBrand: function(newBrand) { // Creating method to change the brand property
        this.brand = newBrand;
    },
};

console.log("cars object - array of objects:", cars)
console.log("initial brand is:" , cars.brand);

cars.changeBrand("Mercedes") // Calling the changeBrand method and outputting to the console
console.log("after using change brand function:", cars.brand)
console.log("radio property:", cars.extras.radio)

let carBrand = "brand" // now a string so can use different characters 
console.log("assigning brand to carBrand variable:", cars[carBrand]) // assigning the brand property to the carBrand variable and outputting to the console


