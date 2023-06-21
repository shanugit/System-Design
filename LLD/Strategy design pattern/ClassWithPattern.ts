/**
 * Here we have created this interface wihch can be used for changing requirements
 */
interface DrivingStrategy {
  drive(): void;
}

class FastDrive implements DrivingStrategy {
  public drive() {
    console.log(`Drive super fast!!`);
  }
}

class NormalDrive implements DrivingStrategy {
  public drive() {
    console.log(`Drive slow`);
  }
}

class Vehicle4 {
  private drivingStrategy: DrivingStrategy;

  constructor(driveStr: DrivingStrategy) {
    this.drivingStrategy = driveStr;
  }

  public print() {
    return this.drivingStrategy.drive();
  }
}
