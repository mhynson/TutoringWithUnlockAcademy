const cars = ["Ford", "Chevy", "Kia", "Lamborghini", "Ferrari", "BMW"];
const blogposts = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "body": "This is the body - aut autem",
    "completed": false
  },
  {
    "userId": 2,
    "id": 2,
    "title": "another one delectus aut autem",
    "body": "This is the body agin - delectus aut autem",
    "completed": false
  },
  {
    "userId": 3,
    "id": 3,
    "title": "delectus aut autem",
    "body": "Last body = delectus aut autem",
    "completed": false
  }
];
// const cars = [0, 1, 2, 3, 4, 5];

// console.log(cars[0]); 
// console.log(cars[1]); 
// console.log(cars[2]); 
// console.log(cars[3]); 


// While loop example -  through our list of cars
// let carCounter = 0;
// while(carCounter < cars.length) {
//   console.log(cars[carCounter]);
//   carCounter++;
// // }


// for loop example -  through our list of cars
// for(let i=0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// Array.forEach - takes a function as the only argument
// cars.forEach((car) => {
//   console.log("The brand is: " + car);
// });

let html = '';
blogposts.forEach(blogpost => {
  const title = `<h1>${blogpost.title}</h1>\n`;
  const body = `<article>${blogpost.body}</article>\n`;
  html += title + body;
});

console.log(html);
