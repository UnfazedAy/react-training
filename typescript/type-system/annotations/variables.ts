let age: number = 1;

let firstName: string = "John";
let isMarried: boolean = false;

let newValue: null = null;
let notAssigned: undefined = undefined;

let today: Date = new Date();

let planets: string[] = ["Earth", "Mars", "Venus"];
let luckyWiners: number[] = [1, 2, 3, 4, 5];
let completed: boolean[] = [true, false, true];

// Classes
class Phone {}

let phone: Phone = new Phone();

// Object Literals
let product: {name: string, price: number} = {
  name: 'pen',
  price: 15
}


// Functions
const printer: (content: string) => void = (content: string) => {
  console.log(content)
}


// Function that returns the 'any' type

const place = '{"city": "New York", "country": "USA"}';
const newLocation = JSON.parse(place);
console.log(newLocation);

// Initialize variable later
let isSunny: boolean;

const forecast = ["Rainy", "Sunny", "Cloudy"];
forecast.forEach((day) => {
  if (day === "Sunny") {
    isSunny = true;
  } else {
    isSunny = false;
  }
  console.log(isSunny);
});