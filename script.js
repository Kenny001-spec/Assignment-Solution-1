'use strict';

// function Construction

const car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
car.prototype.calcAcc = function () {
    return 10 + this.speed;
}
const firstCar = new car('BMW', 120);
console.log(firstCar);
console.log(firstCar.calcAcc());

const secondcar = new car('Mercedes', 95);
console.log(secondcar);
console.log(secondcar.calcAcc());



const car2 = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

car.prototype.calcBreak = function () {
    return this.speed - 5;
}
const firstCarBrk = new car('BMW', 120);
console.log(firstCarBrk);
console.log(firstCarBrk.calcBreak());

const secondcarBrk = new car('Mercedes', 95);
console.log(secondcarBrk);
console.log(secondcarBrk.calcBreak());





const cars = {
    accelerate: 'BMW',
    brake: 'Mercedes',

    start: function () {
        console.log(`${this.accelerate} are running at 120km/hr`);
        console.log(`${this.brake} are running at 95km/hr`);
    }
};
cars.start();











// // ES5 {function Constructor}
// const PersonES5 = function (firstName, LastName, birthYear) {
//     this.firstName = firstName;
//     this.LastName = LastName;
//     this.birthYear = birthYear;
// }

// PersonES5.prototype.CalcAge = function () {
//     return 2022 - this.birthYear;
// }


// const Ismail = new PersonES5('jagunmolu', 'Adam', 1970);
// const Cardi = new PersonES5('cardi', 'B', 1991);

// console.log(Ismail)
// console.log(Ismail.CalcAge());
// // console.log(Cardi)

// // ES6 {function Construction}
// class PersonES6 {
//     constructor(firstName, LastName, birthYear) {
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.birthYear = birthYear
//     }

//     CalcAge() {
//         return 2022 - this.birthYear;
//     }
// }
// const burna = new PersonES6('Burna', 'Wizkid', 1994);
// console.log(burna);
