/* L - Liskov substitutional Principle

# If class B is a sub class of class A then we should be able to replace object of A with B without breaking the behavior of the program

If we implement any interface then we should not deprecate any behaviour of that interface. We can add new capabilities.
*/

interface Bike {
  turnOnEngine(): void;
  accelerate(): void;
}

// In this example we can implements the interface as we are not deprecating any of the parent objects capabilities.

class Motorcycle implements Bike {
  private isEngineOn: boolean;
  private speed = 0;

  public turnOnEngine() {
    this.isEngineOn = true;
  }

  public accelerate() {
    this.speed += 10;
  }
}

// This class is deprecating the Bike interfaces turnOnEngine() as cycle do not have engine.
// We should not be implementing interface like Bike for class like Bicycle as its reducing the parent objects capabilities.

class BiCycle implements Bike {
  private isEngineOn: boolean;
  private speed = 0;

  public turnOnEngine() {
    throw new Error(`Cycle do not have engine!!`);
  }

  public accelerate() {
    this.speed += 5;
  }
}

/**
 * Another example of Liskov principle and how can we solve the issue of narrowing the parent object
 */

class Vehicle {
  public hasWheel() {
    return true;
  }

  public hasEngine(): boolean | string {
    return true;
  }
}

class MotorCycle extends Vehicle {}

class Car extends Vehicle {}

class Cycle extends Vehicle {
  public hasEngine() {
    return `Cycle does not have engine`;
  }
}

let list: any[] = [];
list.push(new MotorCycle());
list.push(new Car());
list.push(new Cycle());

for (let item of list) {
  console.log(item.hasEngine().toString());
}

/**
 * Now lets say we add another class which extends Vehicle class and the hasEngine() does not return anything
 * In that case line 74 will throw error as we are iterating over the objects and checking for hasEngine()
 * and making it string.
 *
 * So when the hasEngine returns nothing we cant convert that to string.
 * If we code like this then we have to first if hasEngnine returns something or not. This makes our code bad.
 * We writing way too much unnecessary code which could be avoided if we follow the Liskov substitution principle
 */

class Vehicle2 {
  public hasWheel() {
    return true;
  }
}

class EngineVehicle extends Vehicle2 {
  public hasEngine() {
    return true;
  }
}

class Car2 extends EngineVehicle {}

class BiCycle2 extends Vehicle2 {}

// In this way we dont need to override the hasEngine() just like we did previously.
