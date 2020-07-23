'use strict';
//For loop
for (let i = 0; i < 5; i++) {
    console.log('The number is '+ i )
  }

//For-in loop
let person = {fname:"John", lname:"Doe", age:25}

for (let x in person) {
  console.log(person[x])
}

//For-of loop
var cars = ['BMW', 'Volvo', 'Mini']

for (let x of cars) {
  console.log(x)
}

//While loop
let i = 0
while (i < 10) {
  console.log('the no. is ' + i)
  i++;
}

//Do-While loop
let m = 0

do {
  console.log('No. is ---  '+ m)
  m++
}
while (m < 10)






