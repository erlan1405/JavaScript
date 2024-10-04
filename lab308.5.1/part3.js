let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//Take an object and increment its age field
// data.forEach(person => {
//     person.age = Number(person.age) + 1;
//     console.log(person);
//   });


//Take an object, make a copy, and increment the age field of the copy. Return the copy.
// data.forEach(person => {
//     let personCopy = { ...person };
//     personCopy.age = Number(personCopy.age) + 1;
//     console.log(personCopy); 
// });


//For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
data.forEach(person => {
    //Make a copy object using spread operator {...}
    let personCopy = { ...person };

    //If age no exist add 0
    if (!personCopy.age) {
        personCopy.age = 0;
    } else {
        //If age exist increase value to 1
        personCopy.age = Number(personCopy.age) + 1;
    }

    //Updated current time and date
    personCopy.updated_at = new Date();

    //Output to console
    console.log(personCopy);
});
