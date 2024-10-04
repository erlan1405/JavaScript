//let a = 10;
// let b = 5;

// {
//     let z = a + b;
//     console.log(z);
// }

// let x = 5;

// if (x > 0) {
//     console.log("positive");
// }
// else {
//     console.log("negative");
// }

// console.log(typeof null)

// for (let i=6; i<=60; i++) {
//     if(i%3 === 0) {
//         console.log(i)
//     }
// }

// let output = ""
// for (let i=0; i<=7; i++) {
//     output = output + "#"
//     console.log(output)
// }

// for (let i=1; i<=9; i++) {
//     if (i%1===1) {
//         console.log("prime number" + " " + i);
//     }
//     else if (i%2===0) {
//         console.log("even number" + " " + i);
//     }
//     else {
//         console.log("odd number" + " " + i);
//     }
// }

// let str = "Hello World"

// for (let i=0; i<str.length; i++) {
//     console.log(str[i]);
// }

// for (let i in str) {
//     console.log(str[i])
// }

// let data = {
//     a:10,
//     b:20,
//     c:30
// }

// console.log(Object.keys(data).length);

// let arr = [10, 20, 30]
// console.log(arr.indexOf(10));

// for (let prop in data) {
//     console.log(prop)
// }

// arr.push(40)
// console.log(arr)


function computeArea (width, heigh) {
    let sum = (width * heigh);
    return `width: ${width}\n` + `heigh: ${heigh}\n` + `answer is ` + sum;
}

console.log( computeArea(2, 2));


function planetHasWater(planet) {
    planet = planet.toLowerCase();
    return planet = planet ==="earth" || planet==="mars" ? true : false;
}

console.log(planetHasWater("mars"));
