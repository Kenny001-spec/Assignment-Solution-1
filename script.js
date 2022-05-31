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