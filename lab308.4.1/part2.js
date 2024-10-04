//Given data
const distance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars per gallon

//Speed = 55 miles per hour
const speed55 = 55; // miles per hour
const efficiency55 = 30; // miles per gallon

const gallonsNeeded55 = distance / efficiency55;
const totalFuelCost55 = gallonsNeeded55 * fuelCostPerGallon;
const tripDuration55 = distance / speed55;
const isBudgetEnough55 = totalFuelCost55 <= fuelBudget;

console.log(`At 55 mph:`);
console.log(`Gallons needed: ${gallonsNeeded55.toFixed(2)} gallons`);
console.log(`Total fuel cost: $${totalFuelCost55.toFixed(2)}`);
console.log(`Is budget enough: ${isBudgetEnough55}`);
console.log(`Trip duration: ${tripDuration55.toFixed(2)} hours`);
console.log('---------------------------');

//Speed = 60 miles per hour
const speed60 = 60; // miles per hour
const efficiency60 = 28; // miles per gallon

const gallonsNeeded60 = distance / efficiency60;
const totalFuelCost60 = gallonsNeeded60 * fuelCostPerGallon;
const tripDuration60 = distance / speed60;
const isBudgetEnough60 = totalFuelCost60 <= fuelBudget;

console.log(`At 60 mph:`);
console.log(`Gallons needed: ${gallonsNeeded60.toFixed(2)} gallons`);
console.log(`Total fuel cost: $${totalFuelCost60.toFixed(2)}`);
console.log(`Is budget enough: ${isBudgetEnough60}`);
console.log(`Trip duration: ${tripDuration60.toFixed(2)} hours`);
console.log('---------------------------');

//Speed = 75 miles per hour
const speed75 = 75; // miles per hour
const efficiency75 = 23; // miles per gallon

const gallonsNeeded75 = distance / efficiency75;
const totalFuelCost75 = gallonsNeeded75 * fuelCostPerGallon;
const tripDuration75 = distance / speed75;
const isBudgetEnough75 = totalFuelCost75 <= fuelBudget;

console.log(`At 75 mph:`);
console.log(`Gallons needed: ${gallonsNeeded75.toFixed(2)} gallons`);
console.log(`Total fuel cost: $${totalFuelCost75.toFixed(2)}`);
console.log(`Is budget enough: ${isBudgetEnough75}`);
console.log(`Trip duration: ${tripDuration75.toFixed(2)} hours`);
console.log('---------------------------');
