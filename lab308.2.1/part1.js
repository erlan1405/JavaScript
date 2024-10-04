const PI = 3.1415;
const radius = 5; //in meters
const areaOfGarden = PI * radius * radius; //Area of the circular garden
const spacePerPlant = 0.8; //Minimum space required per plant in square meters
const initialPlantCount = 20; //Initial number of plants
const maxPlantCapacity = Math.floor(areaOfGarden / spacePerPlant); //Maximum number of plants the garden can hold

//Week 1
let weeks = 1;
let plantCount = initialPlantCount * Math.pow(2, weeks); //Calculate plant count for 1 week
let maxCapacity80Percent = 0.8 * maxPlantCapacity;
let maxCapacity50Percent = 0.5 * maxPlantCapacity;

console.log(`Week ${weeks}:`);
console.log(`Plant Count: ${plantCount}`);
console.log(`Garden Capacity: ${maxPlantCapacity} plants`);

if (plantCount > maxCapacity80Percent) {
  console.log("Action: Prune the plants to stop them from exceeding the garden's capacity.");
} else if (plantCount >= maxCapacity50Percent && plantCount <= maxCapacity80Percent) {
  console.log("Action: Monitor the plants. They are growing at an acceptable rate.");
} else {
  console.log("Action: Plant more plants. There is room for more.");
}
console.log("\n");

//Week 2
weeks = 2;
plantCount = initialPlantCount * Math.pow(2, weeks); // Calculate plant count for 2 weeks
maxCapacity80Percent = 0.8 * maxPlantCapacity;
maxCapacity50Percent = 0.5 * maxPlantCapacity;

console.log(`Week ${weeks}:`);
console.log(`Plant Count: ${plantCount}`);
console.log(`Garden Capacity: ${maxPlantCapacity} plants`);

if (plantCount > maxCapacity80Percent) {
  console.log("Action: Prune the plants to stop them from exceeding the garden's capacity.");
} else if (plantCount >= maxCapacity50Percent && plantCount <= maxCapacity80Percent) {
  console.log("Action: Monitor the plants. They are growing at an acceptable rate.");
} else {
  console.log("Action: Plant more plants. There is room for more.");
}
console.log("\n");

//Week 3
weeks = 3;
plantCount = initialPlantCount * Math.pow(2, weeks); //Calculate plant count for 3 weeks
maxCapacity80Percent = 0.8 * maxPlantCapacity;
maxCapacity50Percent = 0.5 * maxPlantCapacity;

console.log(`Week ${weeks}:`);
console.log(`Plant Count: ${plantCount}`);
console.log(`Garden Capacity: ${maxPlantCapacity} plants`);

if (plantCount > maxCapacity80Percent) {
  console.log("Action: Prune the plants to stop them from exceeding the garden's capacity.");
} else if (plantCount >= maxCapacity50Percent && plantCount <= maxCapacity80Percent) {
  console.log("Action: Monitor the plants. They are growing at an acceptable rate.");
} else {
  console.log("Action: Plant more plants. There is room for more.");
}
