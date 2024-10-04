const PI = 3.1415;
const initialPlants = 100; //Starting number of plants
const weeks = 10; //Number of weeks of growth
const spacePerPlant = 0.8; //Space required per plant in square meters

//Calculate plant count after 10 weeks
const plantCountAfter10Weeks = initialPlants * Math.pow(2, weeks);

//Total space required for all plants
const totalSpaceRequired = plantCountAfter10Weeks * spacePerPlant;

//Initial space for 100 plants
const initialSpace = initialPlants * spacePerPlant;

//Additional space required beyond the initial space
const additionalSpaceRequired = totalSpaceRequired - initialSpace;

//Calculate the radius of the expanded circular garden
const expandedRadius = Math.sqrt(totalSpaceRequired / PI);

console.log(`After ${weeks} weeks:`);
console.log(`Total number of plants: ${plantCountAfter10Weeks}`);
console.log(`Total space required: ${totalSpaceRequired.toFixed(2)} square meters`);
console.log(`Additional space required: ${additionalSpaceRequired.toFixed(2)} square meters`);
console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
