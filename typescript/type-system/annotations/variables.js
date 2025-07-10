var age = 1;
var firstName = "John";
var isMarried = false;
var newValue = null;
var notAssigned = undefined;
var today = new Date();
var planets = ["Earth", "Mars", "Venus"];
var luckyWiners = [1, 2, 3, 4, 5];
var completed = [true, false, true];
// Classes
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
var phone = new Phone();
// Object Literals
var product = {
    name: 'pen',
    price: 15
};
// Functions
var printer = function (content) {
    console.log(content);
};
// Function that returns the 'any' type
var place = '{"city": "New York", "country": "USA"}';
var newLocation = JSON.parse(place);
console.log(newLocation);
// Initialize variable later
var isSunny;
var forecast = ["Rainy", "Sunny", "Cloudy"];
forecast.forEach(function (day) {
    if (day === "Sunny") {
        isSunny = true;
    }
    else {
        isSunny = false;
    }
    console.log(isSunny);
});
