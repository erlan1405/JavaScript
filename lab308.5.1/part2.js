let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  //Sorting by age
  data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  console.log("Sorted by age:", data);
  
  //Filter entries with age <= 50
  let filteredData = data.filter(person => parseInt(person.age) <= 50);
  console.log("Filtered data (age <= 50):", filteredData);
  
  //Map to change "occupation" to "job" and increment age by 1
  let updatedData = filteredData.map(person => ({
    ...person,
    job: person.occupation,
    age: parseInt(person.age) + 1
  }));
  updatedData.forEach(person => delete person.occupation);
  console.log("Updated data (occupation to job, age incremented):", updatedData);
  
  //Calculate sum of ages
  let totalAge = updatedData.reduce((sum, person) => sum + parseInt(person.age), 0);
  console.log("Total age:", totalAge);
  
  //Calculate average age
  let averageAge = totalAge / updatedData.length;
  console.log("Average age:", averageAge);
  