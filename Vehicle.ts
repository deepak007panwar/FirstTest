// vehicle class with dry code
class Vehicle {
    constructor(public color: string) { }
    drive(): void {
        console.log('chugga chugga');
    }
    honk(): void {
        console.log('beep');
    }
}
// bus class with dry code
class Bus extends Vehicle {
    constructor(public seats: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }
}
// bike class with dry code
class Bike extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }
}
// three wheel class with dry code
class ThreeWheel extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }
}

// manual drive class with dry code
class ManualDrive extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }
}
// automatic drive class with dry code
class AutomaticDrive extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('vroom');
    }
}


// drive stratedy pattern returns auto or manual drive
class DriveStrategy {
    constructor(public drive: ManualDrive | AutomaticDrive) { }
    driveVehicle(): void {
        this.drive.drive();
    }
}

// factory pattern returns vehicle type with switch case


class VehicleFactory {
    createVehicle(type: string): Vehicle {
        switch (type) {
            case 'bus':
                return new Bus(10, 'red');
            case 'bike':
                return new Bike(2, 'blue');
            case 'threeWheel':
                return new ThreeWheel(3, 'yellow');
            default:
                throw new Error('Vehicle not found');
        }
    }
}

