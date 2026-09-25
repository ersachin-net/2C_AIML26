class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static displayPlatform() {
        console.log("Booking Platform: QuickRide");
    }
}

class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 8;
    }
}

Vehicle.displayPlatform();
let car = new Car("UP14A1234", "Rahul", 20);
let bike = new Bike("UP14B5678", "Amit", 25);


console.log("\nCar Details:");
console.log("Vehicle No:", car.vehicleNo);
console.log("Driver Name:", car.driverName);
console.log("Distance:", car.distance, "km");
console.log("Fare: Rs.", car.calculateFare());

console.log("\nBike Details:");
console.log("Vehicle No:", bike.vehicleNo);
console.log("Driver Name:", bike.driverName);
console.log("Distance:", bike.distance, "km");
console.log("Fare: Rs.", bike.calculateFare());