const PI = 3.1415;
const initialPlants = 100; //Starting number of plants
const weeks = 10; //Number of weeks of growth
const spacePerPlant = 0.8; //Space required per plant in square meters
const gardenRadius = 5; //Initial garden radius in meters
const gardenArea = PI * Math.pow(gardenRadius, 2); //Area of the garden

try {
  //Calculate plant count after 10 weeks (doubling each week)
  const plantCountAfter10Weeks = initialPlants * Math.pow(2, weeks);

  //Total space required for all plants
  const totalSpaceRequired = plantCountAfter10Weeks * spacePerPlant;

  //Check if the required space exceeds the garden's available space
  if (totalSpaceRequired > gardenArea) {
    //Throw an error if space exceeds the available garden area
    throw new Error("The required space exceeds the available garden area.");
  }

  //If no error, calculate additional space required and the new radius
  const initialSpace = initialPlants * spacePerPlant;
  const additionalSpaceRequired = totalSpaceRequired - initialSpace;
  const expandedRadius = Math.sqrt(totalSpaceRequired / PI);

  //Display the results
  console.log(`After ${weeks} weeks:`);
  console.log(`Total number of plants: ${plantCountAfter10Weeks}`);
  console.log(`Total space required: ${totalSpaceRequired.toFixed(2)} square meters`);
  console.log(`Additional space required: ${additionalSpaceRequired.toFixed(2)} square meters`);
  console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
  
} catch (error) {
  //Catch any error and log an appropriate message
  console.log(`Error: ${error.message}`);
  console.log("Action: The current garden is too small to accommodate the plants. Consider expanding the garden or reducing the number of plants.");
}
